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

  target: Element
  container: HTMLElement | null
  popper: HTMLElement
  $popper: Popper | null

  timer: any

  abstract getArrow: (popper: HTMLElement) => Element | null
  abstract getContent: () => React.ReactElement<any> | null

  state = {visible: false}

  componentDidUpdate (prevProps: any, prevState: any) {
    const visible = this.props.visible
    if ('visible' in this.props && visible !== prevState.visible) {
      if (visible) {
        this.show()
      } else {
        this.hide()
      }
    } else {
      this.renderPopper()
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
    } else  {
      this.target.addEventListener('mouseenter', this.onEnterTarget)
      this.target.addEventListener('mouseleave', this.onLeaveTarget)
    }

    if (visible) {
      this.show()
    }
  }
  
  componentWillUnmount () {
    super.componentWillUnmount()
    if (this.state.visible) {
      document.body.removeEventListener('click', this.onClickOutside)
      this.destroyPopper()
    }
  }

  show = () => {
    const {disabled, onChange} = this.props
    
    if (disabled || !this._isMounted) {
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }

    this.setState({visible: true},  () => {
      document.addEventListener('click', this.onClickOutside)
      this.createPopper()
    })

    if (onChange) {
      onChange(true)
    }
  }

  hide = () => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      const {disabled, onChange} = this.props
      
      if (disabled || !this._isMounted) {
        return
      }
  
      document.removeEventListener('click', this.onClickOutside)
      this.setState({visible: false}, () => {
        this.destroyPopper()
      })
  
      if (onChange) {
        onChange(false)
      }
    }, 200)
  }

  onClickTarget = () => {
    if (this.state.visible) {
      this.hide()
    } else {
      this.show()
    }
  }

  onClickOutside = (e: MouseEvent) => {
    const el = e.target as any
    const {target, popper} = this
    
    if (!el || !target || !popper) {
      return
    }
    
    if (target.contains(el) || popper.contains(el)) {
      return
    }
    
    this.hide()
  }

  onEnterTarget = () => {
    this.show()
  }

  onLeaveTarget = () => {
    this.hide()
  }

  renderPopper = () => {
    const {disabled, placement, trigger} = this.props
    const {visible} = this.state
    const content = this.getContent()
    
    if (disabled || !visible || !content || !this.container) {
      return
    }

    if (this.$popper) {
      this.$popper.destroy()
    }

    this.popper = ReactDOM.unstable_renderSubtreeIntoContainer(this, content, this.container) as HTMLElement

    if (this.popper) {
      const modifiers =  {arrow: {element: this.getArrow(this.popper) || ''}}

      this.$popper = new Popper(this.target, this.popper, {
        placement, modifiers
      })

      if (trigger === 'hover') {
        this.popper.addEventListener('mouseenter', this.onEnterTarget)
        this.popper.addEventListener('mouseleave', this.onLeaveTarget)
      }
    }
  }

  createPopper = () => {
    if (!this.container) {
      this.container = document.createElement('span')
      document.body.appendChild(this.container)
    }

    this.renderPopper()
  }

  destroyPopper = () => {
    if (this.$popper) {
      this.$popper.destroy()
      this.$popper = null
    }

    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container)
      document.body.removeChild(this.container)
      this.container = null
    }
  }
}
