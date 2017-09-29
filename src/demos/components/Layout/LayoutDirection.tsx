import * as React from 'react'
import {Layout} from '../../../index'
import './LayoutDirection.less'

export default class LayoutDirection extends React.Component {

  render () {
    return (
      <div>
        <div className='layout-direction-container'>
          <Layout full header={(
            <div className='side-v'>side</div>
          )}>
            <div className='main'>main</div>
          </Layout>
        </div>

        <div className='layout-direction-container'>
          <Layout full direction='vertical-reverse' header={(
            <div className='side-v'>side</div>
          )}>
            <div className='main'>main</div>
          </Layout>
        </div>

        <div className='layout-direction-container'>
          <Layout full direction='horizontal' header={(
            <div className='side-h'>side</div>
          )}>
            <div className='main'>main</div>
          </Layout>
        </div>

        <div className='layout-direction-container'>
          <Layout full direction='horizontal-reverse' header={(
            <div className='side-h'>side</div>
          )}>
            <div className='main'>main</div>
          </Layout>
        </div>
      </div>
    )
  }
}
