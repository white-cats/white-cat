import * as React from 'react'
import {Tag} from '../../../index'

export default class TagOnClose extends React.Component {

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }

  render () {
    return (
      <div>
        <Tag closable onClose={this.onClick}>关闭</Tag>
      </div>
    )
  }
}
