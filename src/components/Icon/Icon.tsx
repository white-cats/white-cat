import * as React from 'react'
import Base from '../../libs/Base'
import './Icon.less'

const colors = ['normal', 'gray', 'blue', 'red', 'orange', 'green']

export interface IIconProps {
  name?: string,
  spinning?: boolean,
  fit?: boolean,
  clickable?: boolean,
  color?: 'normal' | 'gray' | 'blue' | 'red' | 'orange' | 'green' | string
  onClick?: React.MouseEventHandler<any>
}

export default class Icon extends Base<IIconProps> {
  render () {
    const {name, children, color: _color = 'normal', onClick} = this.props
    const colorClass = colors.indexOf(_color) > -1 ? `whc-icon--${_color}` : ''
    const colorStyle = !colorClass && _color ? {color: _color} : undefined
    const fit = this.props.fit ? ' fa-fw' : ''
    const spin = this.props.spinning ? ' fa-spin' : ''
    const clickable = !!onClick || this.props.clickable

    return (
      name || children
        ? (
          <span {...this.rootProps(['whc-icon', colorClass, {clickable}], colorStyle)} onClick={onClick}>
            {name && <i className={`fa fa-${name}${spin}${fit}`}/>}
            {children !== undefined && <span className='whc-icon__text'>{children}</span>}
          </span>
        )
        : null
    )
  }
}
