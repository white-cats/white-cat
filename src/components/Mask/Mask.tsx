import * as React from 'react'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import Base from '../../libs/Base'
import './Mask.less'

export interface IMaskProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  visible?: boolean,
  fixed?: boolean
}

export default class Mask extends Base<IMaskProps> {

  render () {
    const {visible, fixed, children} = this.props
    return (
      <CSSTransition
        classNames='whc-mask'
        in={visible}
        mountOnEnter
        unmountOnExit
        timeout={300}>
        <div {...this.rootProps(['whc-mask', {fixed}])} onClick={this.props.onClick}>
          {children && <div className='whc-mask__content'>{children}</div>}
        </div>
      </CSSTransition>
    )
  }
}
