import * as React from 'react'
import {Button} from '../../../index'

export interface IButtonType {
  inverse: boolean
}

export default class ButtonType extends React.Component<{}, IButtonType> {

  state = {
    inverse: false
  }

  onToggle = () => {
    this.setState({inverse: !this.state.inverse})
  }

  render () {
    const {inverse} = this.state

    return (
      <div style={{padding: '10px', background: inverse ? 'black' : 'white'}}>
        <Button onClick={this.onToggle}>切换背景</Button>

        <div style={{marginTop: '10px'}}>
          <Button type='plain'>plain</Button>
          <Button>default</Button>
          <Button type='primary'>primary</Button>
          <Button type='success'>success</Button>
          <Button type='warning'>warning</Button>
          <Button type='danger'>danger</Button>
          <Button type='white'>white</Button>
          <Button type='black'>black</Button>
        </div>
        <div style={{marginTop: '10px'}}>
          <Button basic type='plain'>plain</Button>
          <Button basic>default</Button>
          <Button basic type='primary'>primary</Button>
          <Button basic type='success'>success</Button>
          <Button basic type='warning'>warning</Button>
          <Button basic type='danger'>danger</Button>
          <Button basic type='white'>white</Button>
          <Button basic type='black'>black</Button>
        </div>
      </div>
    )
  }
}
