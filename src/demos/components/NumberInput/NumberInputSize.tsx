import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputSize extends React.Component {
  render () {
    return (
      <div>
        <NumberInput size='small' placeholder='small'/>
        <br/><br/>
        <NumberInput size='normal' placeholder='normal'/>
        <br/><br/>
        <NumberInput size='large' placeholder='large'/>
      </div>
    )
  }
}
