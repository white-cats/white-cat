import * as React from 'react'
import {List, Icon} from '../../../components'

export interface IListSizeState {}

export default class ListSize extends React.Component<{}, IListSizeState> {

  state = {
    items: [
      {text: 'Apple', active: false},
      {text: 'Banana', active: false},
      {text: 'Orange', active: false},
      {text: 'Pear', active: false},
    ]
  }

  render () {
    const {items} = this.state

    return (
      <div>
        <List title='Fruits' size='small'>
          {items.map((item, index) => (
            <List.Item
              active={item.active}
              data={index}
              key={index}
              header={<Icon name='tag'/>}
              actions={<div>action</div>}>
              {item.text}
            </List.Item>
          ))}
        </List>
        <List title='Fruits'>
          {items.map((item, index) => (
            <List.Item
              active={item.active}
              data={index}
              key={index}
              header={<Icon name='tag'/>}
              actions={<div>action</div>}>
              {item.text}
            </List.Item>
          ))}
        </List>
        <List title='Fruits' size='large'>
          {items.map((item, index) => (
            <List.Item
              active={item.active}
              data={index}
              key={index}
              header={<Icon name='tag'/>}
              actions={<div>action</div>}>
              {item.text}
            </List.Item>
          ))}
        </List>
      </div>
    )
  }
}
