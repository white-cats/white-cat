import * as React from 'react'
import * as Transition from 'react-transition-group/CSSTransitionGroup'
import Base from '../../libs/Base'
import Button from '../Button'
import Mask from '../Mask'
import './Dialog.less'

export interface IDialogProps {
  visible?: boolean,
  size?: 'small' | 'normal' | 'large',
  maskClosable?: boolean,
  header?: React.ReactNode,
  footer?: React.ReactNode,
  cancelText?: React.ReactNode,
  confirmText?: React.ReactNode,
  onCancel?: () => void,
  onConfirm?: () => void| Promise<any>
}

export interface IDialogState {
  loading: boolean
}

export default class Dialog extends Base<IDialogProps, IDialogState> {

  static defaultProps = {
    size: 'normal',
    maskClosable: true,
    cancelText: '取消',
    confirmText: '确定'
  }

  state = {
    loading: false
  }

  onConfirm = () => {
    const {onConfirm} = this.props
    if (onConfirm) {
      const promise = onConfirm()
      if (promise instanceof Promise) {
        this.setState({loading: true})
        promise.then(() => {
          if (this._isMounted) {
            this.setState({loading: false})
          }
        })
      }
    }
  }

  onClickMask = () => {
    if (!this.props.maskClosable) {
      return
    }
    const onCancel = this.props.onCancel
    if (onCancel) {
      onCancel()
    }
  }

  renderDefaultFooter = () => {
    const {cancelText, confirmText, onCancel} = this.props
    const {loading} = this.state

    return (
      <div className='whc-dialog__footer whc-dialog__default-footer'>
        <div className='whc-dialog__actions'>
          <Button
            basic
            size='small'
            loading={loading}
            onClick={onCancel}>{cancelText}</Button>
          <Button
            loading={loading}
            type='primary'
            size='small'
            icon='check'
            onClick={this.onConfirm}>{confirmText}</Button>
        </div>
      </div>
    )
  }

  render () {
    const {visible, size, header, footer, children, onCancel} = this.props
    const rootProps = this.rootProps(['whc-dialog', `whc-dialog--${size}`])

    return (
      <span className='whc-dialog__wrap'>
        <Mask visible={visible} fixed onClick={this.onClickMask}/>
        <Transition
        transitionName='whc-dialog'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {
          visible
            ? (
              <div {...rootProps}>
                {header && <div className='whc-dialog__header'>{header}</div>}
                {children && <div className='whc-dialog__body'>{children}</div>}
                {
                  footer === undefined
                    ? this.renderDefaultFooter()
                    : footer === null
                    ? null
                    : <div className='whc-dialog__footer'>{footer}</div>
                }
                <span className='whc-dialog__close' onClick={onCancel}>×</span>
              </div>
            )
            : null
        }
      </Transition>
      </span>
    )
  }
}
