import * as React from 'react'
import {Badge, Button, Icon} from '../../../index'

export default class BadgeFloat extends React.Component {

  render () {
    return (
      <div>
        <p>
          <Badge value={6}>
            <Button basic icon='bell'>消息</Button>
          </Badge>
        </p>
        <p>
          <Badge dot>
            <Icon name='download'>新版本</Icon>
          </Badge>
        </p>
      </div>
    )
  }
}
