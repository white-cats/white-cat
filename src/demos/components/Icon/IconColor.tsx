import * as React from 'react'
import {Icon} from '../../../index'

export default class IconColor extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Icon name='pencil'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' color='gray'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' color='blue'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' color='green'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' color='orange'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' color='red'/>&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <Icon name='pencil' clickable={true}/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' clickable={true} color='gray'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' clickable={true} color='blue'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' clickable={true} color='green'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' clickable={true} color='orange'/>&nbsp;&nbsp;&nbsp;
          <Icon name='pencil' clickable={true} color='red'/>&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
