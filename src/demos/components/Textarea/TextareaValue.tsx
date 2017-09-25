import * as React from 'react'
import {Textarea} from '../../../components'

export interface ITextareaValueState {
  value: string
}

export default class TextareaValue extends React.Component<{}, ITextareaValueState> {
  
  state = {
    value: 'default'
  }
  
  render () {
    const {value} = this.state

    return (
      <div>
        <p>{value}</p>
        <Textarea value={value}/>
      </div>
    )
  }
}
