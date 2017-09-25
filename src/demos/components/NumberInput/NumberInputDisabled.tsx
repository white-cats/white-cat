import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputDisabled extends React.Component {
  render () {
    return (
      <div>
        <NumberInput disabled/>
      </div>
    )
  }
}
