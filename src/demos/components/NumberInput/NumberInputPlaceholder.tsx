import * as React from 'react'
import {NumberInput} from '../../../components'

export default class NumberInputPlaceholder extends React.Component {
  render () {
    return (
      <div>
        <NumberInput placeholder='请输入账号'/>
      </div>
    )
  }
}
