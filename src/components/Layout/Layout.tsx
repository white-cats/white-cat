import * as React from 'react'
import Base from '../../libs/Base'
import './Layout.less'

const margins = {
  'horizontal': 'marginRight',
  'horizontal-reverse': 'marginLeft',
  'vertical': 'marginBottom',
  'vertical-reverse': 'marginTop'
}

export interface ILayoutProps {
  direction?: 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse',
  centered?: boolean,
  full?: boolean,
  gap?: number,
  header?: React.ReactNode,
  footer?: React.ReactNode,
}

export default class Layout extends Base<ILayoutProps> {

  static defaultProps = {
    direction: 'vertical'
  }

  render () {
    const {header, footer, children, centered, full, direction: _direction = 'vertical', gap: _gap} = this.props
    const direction = _direction && 'whc-layout--' + _direction
    const gapStyle = _gap && children ? {[margins[_direction]]: _gap} : undefined

    return (
      <div {...this.rootProps(['whc-layout', direction, {centered, full}])}>
        {header && <div className='whc-layout__header' style={gapStyle}>{header}</div>}
        {children && <div className='whc-layout__container'>{children}</div>}
        {footer && <div className='whc-layout__footer'>{footer}</div>}
      </div>
    )
  }
}
