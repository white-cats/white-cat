import * as React from 'react'
import {Button, SidePanel} from '../../../index'

export interface ISidePanelWidthState {
  visible: boolean
}

export default class SidePanelWidth extends React.Component<ISidePanelWidthState> {
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
          width='100px'
          fixed={true}
          visible={visible}
        />
      </div>
    )
  }
}
