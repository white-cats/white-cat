import * as React from 'react'
import {Icon} from '../../../index'

export default class IconClickable extends React.Component {

  render () {
    return (
      <div>
        <Icon name='pencil' clickable={true}/>&nbsp;&nbsp;&nbsp;
        <Icon name='pencil' clickable={false}/>&nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}
