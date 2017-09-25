import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaOnBlur extends React.Component {

  onTextareaOnBlur = () => {
    console.log('onTextareaOnBlur')
  }

  render () {
    return (
      <div>
        <Textarea onBlur={this.onTextareaOnBlur}/>
      </div>
    )
  }
}
