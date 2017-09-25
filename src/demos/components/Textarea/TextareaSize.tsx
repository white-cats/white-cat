import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaSize extends React.Component {
  render () {
    return (
      <div>
        <Textarea size='small' placeholder='small'/>
        <br/><br/>
        <Textarea size='normal' placeholder='normal'/>
        <br/><br/>
        <Textarea size='large' placeholder='large'/>
      </div>
    )
  }
}
