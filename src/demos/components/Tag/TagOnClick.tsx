import * as React from 'react'
import {Tag} from '../../../index'

export default class TagOnClick extends React.Component {

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  render () {
    return (
      <div>
        <Tag onClick={this.onClick}>点击</Tag>
      </div>
    )
  }
}
