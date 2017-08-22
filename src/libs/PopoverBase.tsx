import * as ReactDOM from 'react-dom'
import Popper from 'popper.js'
import Base from './Base'

export type TriggerType = 'click' | 'hover'

export type PlacementType = 'auto' | 'top' | 'right' | 'bottom' | 'left'
| 'auto-start' | 'top-start' | 'right-start' | 'bottom-start' | 'left-start'
| 'auto-end' | 'top-end' | 'right-end' | 'bottom-end' | 'left-end'

export interface IPopoverBaseProps {
  visible?: boolean
  disabled?: boolean
  placement?: PlacementType
  trigger?: TriggerType
  onChange?: (visible: boolean) => void
}

export interface IPopoverBaseState {
  visible: boolean
}

export default abstract class PopoverBase<P> extends Base<IPopoverBaseProps & P, IPopoverBaseState> {

  static defaultProps = {
    placement: 'bottom',
    trigger: 'click'
  }

  target: HTMLElement
  container: HTMLElement | null
  popper: HTMLElement
  $popper: Popper | null

  timer: any

  abstract getArrow: () => HTMLElement | null
  abstract getContent: () => React.ReactElement<any>

  constructor (props: IPopoverBaseProps) {
    super(props as any)

    this.state = {
      visible: false,
    }
  }

  componentWillReceiveProps ({visible}: any) {
    setTimeout(() => {
      // 让onClickOutside先执行
      if (visible !== undefined && visible !== this.state.visible) {
        this.setVisible(!!visible)
      }
    })
  }

  componentDidUpdate (prevProps: any , prevState: IPopoverBaseState) {
    const visible = this.state.visible

    if (visible === prevState.visible) {
      return
    }

    if (visible) {
      this.createPopper()
    } else {
      this.destroyPopper()
    }
  }

  componentDidMount () {
    super.componentDidMount()

    const {visible, trigger} = this.props
    this.target = ReactDOM.findDOMNode(this)

    if (!this.target) {
      return
    }

    if (trigger === 'click') {
      this.target.addEventListener('click', this.onClickTarget)
      document.addEventListener('click', this.onClickOutside)
    } else  {
      this.target.addEventListener('mouseenter', this.onEnterTarget)
      this.target.addEventListener('mouseleave', this.onLeaveTarget)
    }

    if (visible) {
      this.setVisible(true)
    }
  }

  componentWillUnmount () {
    super.componentWillUnmount()
    document.removeEventListener('click', this.onClickOutside)
    this.destroyPopper()
  }

  public setVisible = (visible: boolean) => {
    const {disabled, onChange} = this.props
    if (!disabled) {
      this.setState({visible})
    }
    if (onChange) {
      onChange(visible)
    }
  }

  protected onClickTarget = () => {
    this.setVisible(!this.state.visible)
  }

  protected onClickOutside = (e: MouseEvent) => {
    if (!this.state.visible) {
      return
    }

    const el = e.target as any
    const {target, popper} = this
  
    if (!el || !target || !popper) {
      return
    }

    if (target.contains(el) || popper.contains(el)) {
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.setVisible(false)
    }, 300)
  }

  protected onEnterTarget = () => {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    this.setVisible(true)
  }

  protected onLeaveTarget = () => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.setVisible(false)
    }, 300)
  }

  protected updatePopper = (content: React.ReactElement<any>) => {
    this.popper = ReactDOM.render(content, this.container) as HTMLElement
  
    if (this.$popper) {
      this.$popper.destroy()
    }
    if (this.popper) {
      const arrow = this.getArrow()
      const modifiers =  {} as any
      if (arrow) {
        modifiers.arrow = {element: arrow}
        this.popper.appendChild(arrow)
      }

      this.$popper = new Popper(this.target, this.popper, {
        placement: this.props.placement,
        modifiers
      })

      if (this.props.trigger === 'hover') {
        this.popper.addEventListener('mouseenter', this.onEnterTarget)
        this.popper.addEventListener('mouseleave', this.onLeaveTarget)
      }
    }
  }

  protected createPopper = () => {
    const {onChange} = this.props
    if (!this.container) {
      this.container = document.createElement('span')
      document.body.appendChild(this.container)
    }
    this.updatePopper(this.getContent())
    if (onChange) {
      onChange(true)
    }
  }

  protected destroyPopper = () => {
    const {onChange} = this.props
    if (this.$popper) {
      this.$popper.destroy()
      this.$popper = null
    }
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container)
      document.body.removeChild(this.container)
      this.container = null
    }
    if (onChange) {
      onChange(false)
    }
  }
}
