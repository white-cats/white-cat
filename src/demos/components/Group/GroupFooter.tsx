import * as React from 'react'
import {Group} from '../../../index'

export default class GroupFooter extends React.Component {

  render () {
    return (
      <div>
        <Group
          title={<span>分组标题</span>}
          footer={<span>分组尾部</span>}/>
      </div>
    )
  }
}
