import * as React from 'react'
import {Textarea} from '../../../components'

export interface ITextareaOnChangeState {
  value: string
}

export default class TextareaOnChange extends React.Component<ITextareaOnChangeState> {

  state = {
    value: 'test'
  }

  onValueChange = (e: any, value: string) => {
    this.setState({value})
  }

  render () {
    const {value} = this.state

    return (
      <div>
        <p>{value}</p>
        <Textarea value={value} onChange={this.onValueChange}/>
      </div>
    )
  }
}
