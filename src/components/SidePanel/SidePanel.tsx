import * as React from 'react'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import Base from '../../libs/Base'
import ScrollBar from '../ScrollBar'
import './SidePanel.less'

export interface ISidePanelProps {
  header?: React.ReactNode,
  placement?: 'left' | 'right',
  fixed?: boolean,
  visible?: boolean,
  width?: number | string
}

export interface ISidePanelState {
  visible: boolean
}

export default class SidePanel extends Base<ISidePanelProps, ISidePanelState> {

  static defaultProps = {
    placement: 'left',
    fixed: false,
    width: '700px'
  }

  constructor (props: ISidePanelProps) {
    super(props)
    this.state = {
      visible: !!props.visible
    }
  }
  
  render () {
    const {header, placement, fixed, width, visible, children} = this.props
    
    return (
        <CSSTransition
          classNames='whc-side-panel'
          in={visible}
          mountOnEnter
          unmountOnExit
          timeout={300}>
          <div {...this.rootProps(['whc-side-panel', `whc-side-panel--${placement}`, {fixed, visible}], {width})}>
            {header && <div className='whc-side-panel__header'>{header}</div>}
            {children && <ScrollBar className='whc-side-panel__container'>{children}</ScrollBar>}
          </div>
        </CSSTransition>
    )
  }
}
