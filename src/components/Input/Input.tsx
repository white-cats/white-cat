import * as React from 'react'
import Base from '../../libs/Base'
import './Input.less'

export interface IInputProps {
  type?: 'text' | 'password',
  value?: string,
  placeholder?: string,
  size?: 'small' | 'normal' | 'large',
  disabled?: boolean,
  full?: boolean,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  autoFocus?: boolean,
  onChange?: (e: React.ChangeEvent<any>, value: string) => void,
  onFocus?: React.FormEventHandler<any>,
  onBlur?: React.FormEventHandler<any>,
  onKeyDown?: React.FormEventHandler<any>
}

export default class Input extends Base<IInputProps> {

  static defaultProps = {
    type: 'text',
    size: 'normal'
  }

  autoFocus = (el: HTMLInputElement) => {
    if (this.props.autoFocus && el) {
      el.focus()
    }
  }
  
  onChange: React.ChangeEventHandler<any> = (e: React.ChangeEvent<any>) => {
    const {onChange} = this.props
    if (onChange) {
      onChange(e, e.target.value)
    }
  }

  render () {
    const {type, size, disabled, full, prefix, suffix, value, placeholder, onFocus, onBlur, onKeyDown} = this.props
    const _size = size && `whc-input--` + size
    const _prefix = !!prefix && `whc-input--has-prefix`
    const _suffix = !!suffix && `whc-input--has-suffix`

    return (
      <div {...this.rootProps(['whc-input', _size, _prefix, _suffix, {disabled, full}])}>
        {prefix && <div className='whc-input__prefix'>{prefix}</div>}
        <input
          ref={this.autoFocus}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className='whc-input__original'
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}/>
        {suffix && <div className='whc-input__suffix'>{suffix}</div>}
      </div>
    )
  }
}
