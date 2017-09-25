import * as React from 'react'
import {Loader} from '../../../index'

export default class LoaderText extends React.Component {

  render () {
    return (
      <div>
        <Loader loading={true} text='加载中...'/>
      </div>
    )
  }
}
