import * as React from 'react'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import * as TransitionGroup from 'react-transition-group/TransitionGroup'
import Base from '../../libs/Base'
import Notice from './Notice'
import './Notification.less'

const seed = 0

function getKey () {
  return 'key_' + Date.now() + seed
}

export interface INoticeOptions {
  type?: 'primary' | 'success' | 'warning' | 'error',
  icon?: string,
  content?: string,
  closable?: boolean,
  duration?: number
}

export interface INotice extends INoticeOptions {
  key: string
}

export interface INotificationProps {}

export interface INotificationState {
  notices: INotice[]
}

export default class Notification extends Base<INotificationProps, INotificationState> {

  static Notice = Notice

  constructor (props: INotificationProps) {
    super(props)
    this.state = {
      notices: []
    }
  }

  add = (options: INoticeOptions) => {
    const notice = {...options, key: getKey()}
    this.setState((state) => ({
      notices: [...state.notices, notice]
    }))
  }

  remove = (key: string) => {
    this.setState((state) => ({
      notices: state.notices.filter((n) => n.key !== key)
    }))
  }

  render () {
    const notices = this.state.notices
    return (
      <TransitionGroup {...this.rootProps('whc-notification')}>
        {notices.map(({key, content, ...rest}) => (
          <CSSTransition
            key={key}
            classNames='whc-notice'
            timeout={300}>
            <Notice {...rest} onClose={() => this.remove(key)}>{content}</Notice>
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  }
}
