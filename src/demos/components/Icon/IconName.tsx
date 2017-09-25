import * as React from 'react'
import {Icon} from '../../../index'

export default class IconName extends React.Component {

  render () {
    return (
      <div>
        <Icon name='pencil'/>&nbsp;&nbsp;&nbsp;
        <Icon name='trash'/>&nbsp;&nbsp;&nbsp;
        <Icon name='ellipsis-h'/>
      </div>
    )
  }
}
