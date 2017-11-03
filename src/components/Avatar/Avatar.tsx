import './Avatar.less'

import * as React from 'react'

import Base, {SizeType} from '../../libs/Base'
import Tooltip from '../Tooltip'

export interface IAvatarProps {
  src?: string,
  title?: string,
  size?: SizeType
}

export default class Avatar extends Base<IAvatarProps> {

  static defaultProps = {
    src: '',
    size: 'normal'
  }

  render () {
    const {src, title, size} = this.props
    return (
      <div {...this.rootProps(['whc-avatar', `whc-avatar--${size}`])}>
        {title ? (
          <Tooltip content={title}>
            <img className='whc-avatar__img' src={src}/>
          </Tooltip>
        ) : (
          <img className='whc-avatar__img' src={src}/>
        )}
      </div>
    )
  }
}
