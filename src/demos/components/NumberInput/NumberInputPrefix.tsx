import * as React from 'react'
import {NumberInput, Icon} from '../../../components'

export default class NumberInputPrefix extends React.Component {
  render () {
    return (
      <div>
        <NumberInput prefix={<Icon name='search'/>}/>
      </div>
    )
  }
}
