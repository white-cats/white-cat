import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonDisabled extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Button disabled type='plain'>禁用</Button>
          <Button disabled>禁用</Button>
          <Button disabled type='primary'>禁用</Button>
          <Button disabled type='success'>禁用</Button>
          <Button disabled type='warning'>禁用</Button>
          <Button disabled type='danger'>禁用</Button>
          <Button disabled type='white'>禁用</Button>
          <Button disabled type='black'>禁用</Button>
        </div>
        <div style={{marginTop: '10px'}}>
          <Button disabled basic type='plain'>禁用</Button>
          <Button disabled basic>禁用</Button>
          <Button disabled basic type='primary'>禁用</Button>
          <Button disabled basic type='success'>禁用</Button>
          <Button disabled basic type='warning'>禁用</Button>
          <Button disabled basic type='danger'>禁用</Button>
          <Button disabled basic type='white'>禁用</Button>
          <Button disabled basic type='black'>禁用</Button>
        </div>
      </div>
    )
  }
}
