import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonIcon extends React.Component {

  render () {
    return (
      <div>
        <Button.Group full>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </Button.Group>
        <br/>
        <Button.Group full>
          <Button basic>one</Button>
          <Button basic>two</Button>
          <Button basic>three</Button>
        </Button.Group>
        <br/>
        <Button.Group full>
          <Button type='white'>one</Button>
          <Button type='white'>two</Button>
          <Button type='white'>three</Button>
        </Button.Group>
      </div>
    )
  }
}
