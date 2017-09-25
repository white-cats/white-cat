import * as React from 'react'
import {NumberInput, Icon} from '../../../components'

export default class NumberInputSuffix extends React.Component {
  render () {
    return (
      <div>
        <NumberInput suffix={<Icon name='search'/>}/>
      </div>
    )
  }
}
