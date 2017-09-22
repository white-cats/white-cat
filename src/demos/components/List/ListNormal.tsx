import * as React from 'react'
import {List, Icon} from '../../../components'

export interface IListNormal {
  items: {text: string, active: boolean}[]
}

export default class ListNormal extends React.Component<{}, IListNormal> {

  state = {
    items: [
      {text: 'Apple', active: false},
      {text: 'Banana', active: false},
      {text: 'Orange', active: false},
      {text: 'Pear', active: false},
    ]
  }

  onClickItem = (e: any, index: number) => {
    this.setState({items: this.state.items.map((item, i) => (
      i === index ? {...item, active: !item.active} : item
    ))})
  }

  render () {
    const {items} = this.state

    return (
      <div>
        <List title='Fruits'>
          {items.map((item, index) => (
            <List.Item
              active={item.active}
              data={index}
              key={index}
              header={<Icon name='tag'/>}
              actions={<div>action</div>}
              onClick={this.onClickItem}>
              {item.text}
            </List.Item>
          ))}
        </List>
      </div>
    )
  }
}
