import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaOnKeyDown extends React.Component {

  onTextareaKeyDown = () => {
    console.log('onTextareaKeyDown')
  }

  render () {
    return (
      <div>
        <Textarea onKeyDown={this.onTextareaKeyDown}/>
      </div>
    )
  }
}
