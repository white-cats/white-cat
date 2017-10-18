import * as React from 'react'
import {notify, Button} from '../../../'

interface INotificationNormalProps {}

interface INotificationNormalState {}

export default class NotificationNormal extends React.Component<INotificationNormalProps, INotificationNormalState> {

  onShow = () => {
    notify.success('content')
  }

  render () {
    return (
      <div className='NotificationNormal'>
        <Button onClick={this.onShow}>show</Button>
      </div>
    )
  }
}
