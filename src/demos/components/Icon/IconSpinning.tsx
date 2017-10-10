import * as React from 'react'
import {Icon} from '../../../index'

export default class IconSpinning extends React.Component {

  render () {
    return (
      <div>
        <Icon name='refresh' spinning={true}/>
      </div>
    )
  }
}
