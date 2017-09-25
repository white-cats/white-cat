import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputOnKeyDown extends React.Component {

  onNumberInputKeyDown = () => {
    console.log('onNumberInputKeyDown')
  }

  render () {
    return (
      <div>
        <NumberInput onKeyDown={this.onNumberInputKeyDown}/>
      </div>
    )
  }
}
