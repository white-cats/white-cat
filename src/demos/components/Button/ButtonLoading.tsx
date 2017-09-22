import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonLoading extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Button loading type='plain'>加载中</Button>
          <Button loading>加载中</Button>
          <Button loading type='primary'>加载中</Button>
          <Button loading type='success'>加载中</Button>
          <Button loading type='warning'>加载中</Button>
          <Button loading type='danger'>加载中</Button>
          <Button loading type='white'>加载中</Button>
          <Button loading type='black'>加载中</Button>
        </div>
        <div style={{marginTop: '10px'}}>
          <Button loading basic type='plain'>加载中</Button>
          <Button loading basic>加载中</Button>
          <Button loading basic type='primary'>加载中</Button>
          <Button loading basic type='success'>加载中</Button>
          <Button loading basic type='warning'>加载中</Button>
          <Button loading basic type='danger'>加载中</Button>
          <Button loading basic type='white'>加载中</Button>
          <Button loading basic type='black'>加载中</Button>
        </div>
      </div>
    )
  }
}
