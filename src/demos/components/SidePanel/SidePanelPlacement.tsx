import * as React from 'react'
import {Button, SidePanel} from '../../../index'

export interface ISidePanelPlacementState {
  visible: boolean
}

export default class SidePanelPlacement extends React.Component<ISidePanelPlacementState> {
  state = {
    visible: false
  }

  onClick = () => {
    this.setState({visible: !this.state.visible})
  }

  render () {
    const {visible} = this.state
    return (
      <div>
        <Button onClick={this.onClick}>{visible ? '关闭' : '开启'}</Button>

        <SidePanel
          width='300px'
          placement='right'
          fixed={true}
          visible={visible}
        />
      </div>
    )
  }
}
