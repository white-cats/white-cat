import * as React from 'react'
import {Loader} from '../../../index'

export default class LoaderLoading extends React.Component {

  render () {
    return (
      <div>
        <Loader loading={true}/>
      </div>
    )
  }
}
