import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaAutoFocus extends React.Component {
  render () {
    return (
      <div>
        <Textarea autoFocus/>
      </div>
    )
  }
}
