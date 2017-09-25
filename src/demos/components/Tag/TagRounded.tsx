import * as React from 'react'
import {Tag} from '../../../index'

export default class TagRounded extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Tag rounded={true}>true</Tag>&nbsp;&nbsp;
          <Tag rounded={false}>false</Tag>&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
