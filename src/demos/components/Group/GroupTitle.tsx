import * as React from 'react'
import {Group} from '../../../index'

export default class GroupTitle extends React.Component {

  render () {
    return (
      <div>
        <Group
          title={<span>分组标题</span>}/>
      </div>
    )
  }
}
