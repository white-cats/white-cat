import * as React from 'react'
import {Loader} from '../../../index'

export default class LoaderChildren extends React.Component {

  render () {
    return (
      <div>
        <Loader loading={true}>
          <span>加载中</span>
        </Loader>
      </div>
    )
  }
}
