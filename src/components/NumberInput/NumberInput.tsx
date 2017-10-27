import * as React from 'react'
import Base from '../../libs/Base'
import Input from '../Input'

export interface INumberInputProps {
  value?: string,
  placeholder?: string,
  size?: 'small' | 'normal' | 'large',
  disabled?: boolean,
  full?: boolean,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  autoFocus?: boolean,
  onChange?: (e: React.ChangeEvent<any>, value: number) => void,
  onFocus?: React.FormEventHandler<any>,
  onBlur?: React.FormEventHandler<any>,
  onKeyDown?: React.FormEventHandler<any>
}

export default class NumberInput extends Base<INumberInputProps> {

  autoFocus = (el: HTMLInputElement) => {
    if (this.props.autoFocus && el) {
      el.focus()
    }
  }
  
  onChange = (e: React.ChangeEvent<any>) => {
    const {onChange} = this.props
    const valueStr = e.target.value
    if (onChange) {
      onChange(e, parseInt(valueStr, 10) || 0)
    }
  }

  render () {
    const {value: valueStr, onChange, ...rest} = this.props

    const value = (parseInt(valueStr + '') || 0) + ''

    return (
      <Input {...this.rootProps('whc-number-input')} {...rest} value={value} onChange={this.onChange}/>
    )
  }
}
