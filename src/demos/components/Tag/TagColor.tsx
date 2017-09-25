import * as React from 'react'
import {Tag} from '../../../index'

export default class TagColor extends React.Component {

  render () {
    return (
      <div>
        <Tag color='gray'>gray</Tag>
        <Tag color='primary'>primary</Tag>
        <Tag color='success'>success</Tag>
        <Tag color='warning'>warning</Tag>
        <Tag color='danger'>danger</Tag>
        <Tag color='#ffaacc'>#ffaacc</Tag>
      </div>
    )
  }
}
