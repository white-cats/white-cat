import * as React from 'react'
import Base from '../../libs/Base'

export interface IListItemProps {
  active?: boolean
  data?: any
  header?: React.ReactNode
  actions?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement>, data: any) => void
}

export default class ListItem extends Base<IListItemProps> {

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {data, onClick} = this.props
    if (onClick) {
      onClick(e, data)
    }
  }

  onClickActions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  render () {
    const {active, children, header, actions} = this.props

    return (
      <div {...this.rootProps(['whc-list__item', {active}])} onClick={this.onClick}>
        {header && (
          <div className='whc-list__item-header'>{header}</div>
        )}
        {children && (
          <div className='whc-list__item-content'>{children}</div>
        )}
        {actions && (
          <div className='whc-list__item-actions' onClick={this.onClickActions}>{actions}</div>
        )}
      </div>
    )
  }
}
