import * as React from 'react'
import {Icon} from '../../../index'

export default class IconOnClick extends React.Component {

  onClick = (e: any) => {
    console.log('e: ', e)
  }

  render () {
    return (
      <div>
        <Icon
          name='pencil'
          onClick={this.onClick}/>
      </div>
    )
  }
}
