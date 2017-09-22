import * as React from 'react'
import Base from '../../libs/Base'
import ListItem from './ListItem'
import './List.less'

export interface IListProps {
  title?: React.ReactNode
}

export default class List extends Base<IListProps> {

  static Item = ListItem

  render () {
    const {title, children} = this.props

    return (
      <div {...this.rootProps('whc-list')}>
        {title && <div className='whc-list__title'>{title}</div>}
        {children}
      </div>
    )
  }
}
