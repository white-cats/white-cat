import * as React from 'react'
import * as Transition from 'react-transition-group/CSSTransitionGroup'
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
      <Transition
        transitionName='whc-side-panel'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {
          visible
            ? (
              <div {...this.rootProps(['whc-side-panel', `whc-side-panel--${placement}`, {fixed, visible}], {width})}>
                {header && <div className='whc-side-panel__header'>{header}</div>}
                {children && <ScrollBar className='whc-side-panel__container'>{children}</ScrollBar>}
              </div>
            )
            : null
        }
      </Transition>
    )
  }
}
