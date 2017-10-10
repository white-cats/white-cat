import * as React from 'react'
import Base from '../../libs/Base'
import ListItem from './ListItem'
import './List.less'

export interface IListProps {
  title?: React.ReactNode,
  size?: 'small' | 'normal' | 'large'
}

export default class List extends Base<IListProps> {

  static Item = ListItem

  static defaultProps: IListProps = {
    size: 'normal'
  }

  render () {
    const {title, children} = this.props

    const size = this.props.size && 'whc-list--' + this.props.size

    return (
      <div {...this.rootProps(['whc-list', size])}>
        {title && <div className='whc-list__title'>{title}</div>}
        {children}
      </div>
    )
  }
}
