import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputOnBlur extends React.Component {

  onNumberInputOnBlur = () => {
    console.log('onNumberInputOnBlur')
  }

  render () {
    return (
      <div>
        <NumberInput onBlur={this.onNumberInputOnBlur}/>
      </div>
    )
  }
}
