import * as React from 'react'
import {ScrollBar, Button} from '../../../components'

interface IScrollBarNormalProps {}

interface IScrollBarNormalState {
  count: number
}

export default class ScrollBarNormal extends React.Component<IScrollBarNormalProps, IScrollBarNormalState> {

  state: IScrollBarNormalState = {
    count: 50
  }

  onAdd = () => {
    this.setState({count: this.state.count + 1})
  }

  render () {
    const {count} = this.state

    return (
      <div>
        <Button type='primary' onClick={this.onAdd}>{count} Add</Button>
        <ScrollBar
          dragToScroll
          style={{width: '300px', height: '300px', border: '1px solid #eee'}}>
          {Array(count).fill(0).map((n, i) => <Button key={i}>{i}</Button>)}
        </ScrollBar>
      </div>
    )
  }
}
