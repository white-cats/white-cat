import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaOnFocus extends React.Component {

  onTextareaFocus = () => {
    console.log('onTextareaFocus')
  }

  render () {
    return (
      <div>
        <Textarea onFocus={this.onTextareaFocus}/>
      </div>
    )
  }
}
