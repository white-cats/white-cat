import * as React from 'react'
import {Dialog, Button} from '../../../components'

interface IDialogSizeProps {}

interface IDialogSizeState {
  smallVisible: boolean,
  normalVisible: boolean,
  largeVisible: boolean
}

export default class DialogSize extends React.Component<IDialogSizeProps, IDialogSizeState> {

  state: IDialogSizeState = {
    smallVisible: false,
    normalVisible: false,
    largeVisible: false
  }

  toggleSmallDialog = () => {
    this.setState({smallVisible: !this.state.smallVisible})
  }

  toggleNormalDialog = () => {
    this.setState({normalVisible: !this.state.normalVisible})
  }

  toggleLargeDialog = () => {
    this.setState({largeVisible: !this.state.largeVisible})
  }

  render () {
    const {smallVisible, normalVisible, largeVisible} = this.state
    return (
      <div className='DialogSize'>
        <Button onClick={this.toggleSmallDialog}>小</Button>
        <Dialog size='small' visible={smallVisible} onCancel={this.toggleSmallDialog}>small</Dialog>

        <Button onClick={this.toggleNormalDialog}>中</Button>
        <Dialog visible={normalVisible} onCancel={this.toggleNormalDialog}>normal</Dialog>

        <Button onClick={this.toggleLargeDialog}>大</Button>
        <Dialog size='large' visible={largeVisible} onCancel={this.toggleLargeDialog}>large</Dialog>
      </div>
    )
  }
}
