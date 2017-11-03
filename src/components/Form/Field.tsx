import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import FormStore from './FormStore'

export interface IChildProps {
  value?: any,
  name?: string,
  message?: string,
  onChange: (e: any, value: any) => void
  onValueChange: (value: any) => void
}

export interface IFormFieldProps {
  name?: string,
  value?: any,
  label?: React.ReactNode,
  children: React.ReactNode | ((props: IChildProps) => React.ReactNode)
}

export default class FormField extends Base<IFormFieldProps> {

  static contextTypes = {
    $formStore: PropTypes.any,
  }

  $formStore: FormStore

  constructor (props: IFormFieldProps, context: any) {
    super(props)

    const {name, value} = props
    this.$formStore = context.$formStore
    if (name && this.$formStore) {
      if (value === undefined) {
        console.warn(`Field with name '${name}' should provide a value`)
      }
      this.$formStore.set(name, value)
    }
  }
  
  onChange = (e: any, value: any) => {
    const name = this.props.name
    if (name && this.$formStore) {
      this.$formStore.set(name, value, () => {
        this.forceUpdate()
      })
    }
  }

  onValueChange = (value: any) => {
    this.onChange(null, value)
  }

  renderChildren = () => {
    const {name, children} = this.props
    const value = name && this.$formStore
      ? this.$formStore.get(name)
      : undefined

    return typeof children === 'function'
      ? children({
        name,
        value,
        onChange: this.onChange,
        onValueChange: this.onValueChange
      })
      : children
  }

  render () {
    const {label} = this.props
    return (
      <div {...this.rootProps('whc-form-field')}>
        <label className='whc-form-field__label'>
          {label}
        </label>
        <div className='whc-form-field__content'>
          {this.renderChildren()}
        </div>
      </div>
    )
  }
}
