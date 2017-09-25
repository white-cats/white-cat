import * as React from 'react'
import {Icon} from '../../../index'

export default class IconSpinning extends React.Component {

  render () {
    return (
      <div>
        <Icon name='pencil' spinning={true}/>&nbsp;&nbsp;&nbsp;
        <Icon name='pencil' spinning={false}/>&nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}
