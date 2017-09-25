import * as React from 'react'
import {Tag} from '../../../index'

export default class TagSize extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Tag size='small'>small</Tag>&nbsp;&nbsp;
          <Tag size='normal'>normal</Tag>&nbsp;&nbsp;
          <Tag size='large'>large</Tag>&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
