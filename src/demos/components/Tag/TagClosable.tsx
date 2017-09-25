import * as React from 'react'
import {Tag} from '../../../index'

export default class TagClosable extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Tag closable={true}>true</Tag>&nbsp;&nbsp;
          <Tag closable={false}>false</Tag>&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
