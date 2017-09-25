import * as React from 'react'
import {Tag} from '../../../index'

export default class TagClickable extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Tag clickable={true}>true</Tag>&nbsp;&nbsp;
          <Tag clickable={false}>false</Tag>&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
