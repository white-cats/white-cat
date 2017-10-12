import * as React from 'react'
import './Tooltip.less'
import PopoverBase from '../../libs/PopoverBase'

export interface ITooltipProps {
  content?: React.ReactNode,
  color?: 'dark' | 'light',
  zIndex?: number
}

export default class Tooltip extends PopoverBase<ITooltipProps> {
  
  static defaultProps = {
    placement: 'top',
    trigger: 'hover',
    color: 'dark'
  }
  
  getArrow = (popper: HTMLElement) => {
    return popper.querySelector('.whc-tooltip__arrow')
  }

  getContent = () => {
    const {content, color, zIndex} = this.props
    let styles = zIndex === undefined ? undefined : {zIndex}

    if (!content) {
      return null
    }

    return (
      <div {...this.rootProps(['whc-tooltip', `whc-tooltip--${color}`], styles)}>
        <div className='whc-tooltip__content'>{content}</div>
        <div className='whc-tooltip__arrow'/>
      </div>
    )
  }

  render () {
    const children = this.props.children || ''
    return typeof children === 'string'
      ? React.createElement('span', {}, children)
      : React.cloneElement(React.Children.only(children))
  }
}
