import * as React from 'react'
import {Avatar} from '../../../components'

declare const require: any

const img = require('./avatar.jpg')

interface IAvatarTypeProps {}

export default class AvatarType extends React.Component<IAvatarTypeProps> {

  render () {
    return (
      <div>
        <div>
          <Avatar src={img} title='title'>hover</Avatar>
        </div>
      </div>
    )
  }
}