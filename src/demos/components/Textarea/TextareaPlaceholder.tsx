import * as React from 'react'
import {Textarea} from '../../../components'

export default class TextareaPlaceholder extends React.Component {
  render () {
    return (
      <div>
        <Textarea placeholder='请输入账号'/>
      </div>
    )
  }
}
