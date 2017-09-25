import * as React from 'react'
import {NumberInput} from '../../../components'

export interface INumberInputValueState {
  value: string
}

export default class NumberInputValue extends React.Component<{}, INumberInputValueState> {
  
  state = {
    value: 'default'
  }
  
  render () {
    const {value} = this.state

    return (
      <div>
        <p>{value}</p>
        <NumberInput value={value}/>
      </div>
    )
  }
}
