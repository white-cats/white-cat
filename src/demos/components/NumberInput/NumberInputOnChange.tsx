import * as React from 'react'
import {NumberInput} from '../../../components'

export interface INumberInputOnChangeState {
  value: string
}

export default class NumberInputOnChange extends React.Component<INumberInputOnChangeState> {

  state = {
    value: 'test'
  }

  onValueChange = (e: any, value: number) => {
    this.setState({value})
  }

  render () {
    const {value} = this.state

    return (
      <div>
        <p>{value}</p>
        <NumberInput value={value} onChange={(e, v) => this.onValueChange(e, v)}/>
      </div>
    )
  }
}
