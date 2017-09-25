import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputAutoFocus extends React.Component {
  render () {
    return (
      <div>
        <NumberInput autoFocus/>
      </div>
    )
  }
}
