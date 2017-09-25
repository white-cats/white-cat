import * as React from 'react'
import {Group, Icon} from '../../../index'

export default class GroupFooter extends React.Component {

  render () {
    return (
      <div>
        <Group
          title={<span>分组标题</span>}
          actions={<Icon name='trash' clickable/>}/>
      </div>
    )
  }
}
