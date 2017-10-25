import * as React from 'react'
import {Row, Col} from '../../../index'
import './style.less'

export default class ColSpan extends React.Component {

  render () {
    return (
      <div className='ColSpan'>
        <Row>
          <Col span={1}><div>1</div></Col>
          <Col span={2}><div>2</div></Col>
          <Col span={2}><div>2</div></Col>
          <Col span={3}><div>3</div></Col>
          <Col span={4}><div>4</div></Col>
          <Col span={12}><div>12</div></Col>
        </Row>
      </div>
    )
  }
}
