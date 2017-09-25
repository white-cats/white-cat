import * as React from 'react'
import {Button, SidePanel} from '../../../index'

export interface ISidePanelHeaderState {
  visible: boolean
}

export default class SidePanelHeader extends React.Component<ISidePanelHeaderState> {
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
          header={<span>This is Header</span>}
          width='200px'
          fixed={true}
          visible={visible}
        />
      </div>
    )
  }
}
