import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputOnFocus extends React.Component {

  onNumberInputFocus = () => {
    console.log('onNumberInputFocus')
  }

  render () {
    return (
      <div>
        <NumberInput onFocus={this.onNumberInputFocus}/>
      </div>
    )
  }
}
