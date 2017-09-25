import * as React from 'react'
import {Icon} from '../../../index'

export default class IconFit extends React.Component {

  render () {
    return (
      <div>
        <Icon name='pencil' fit={true}/>&nbsp;&nbsp;&nbsp;
        <Icon name='pencil' fit={false}/>&nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}
