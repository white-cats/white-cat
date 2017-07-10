import * as React from 'react'
import * as Transition from 'react-transition-group/CSSTransitionGroup'
import Base from '../../libs/Base'
import Loader from '../Loader'
import ScrollBar from '../ScrollBar'
import './SidePanel.less'

interface ISidePanelProps {
  header?: React.ReactNode,
  placement?: 'left' | 'right',
  fixed?: boolean,
  visible?: boolean,
  loading?: boolean,
  width?: number | string
}

interface ISidePanelState {
  visible: boolean
}

export default class SidePanel extends Base<ISidePanelProps, ISidePanelState> {

  static defaultProps = {
    placement: 'left',
    fixed: false,
    width: '700px',
    loading: false
  }

  constructor (props: ISidePanelProps) {
    super(props)
    this.state = {
      visible: !!props.visible
    }
  }
  
  render () {
    const {header, placement, fixed, width, visible, loading, children} = this.props
    
    return (
      <Transition
        transitionName='SidePanel'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {
          visible
          ? (
            <div {...this.rootProps(['SidePanel', `SidePanel--${placement}`, {fixed, visible}], {width})}>
              {!loading && header && <div className='SidePanel__header'>{header}</div>}
              {
                loading
                ? <Loader loading={true}/>
                : children && <ScrollBar className='SidePanel__container'>{children}</ScrollBar>
              }
            </div>
          )
          : null
        }
      </Transition>
    )
  }
}