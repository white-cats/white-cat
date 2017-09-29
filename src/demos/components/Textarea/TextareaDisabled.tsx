import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaDisabled extends React.Component {
  render () {
    return (
      <div>
        <Textarea disabled/>
      </div>
    )
  }
}
