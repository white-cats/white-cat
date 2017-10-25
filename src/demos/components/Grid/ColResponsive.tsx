import * as React from 'react'
import {Row, Col} from '../../../index'
import './style.less'

export default class ColResponsive extends React.Component {

  render () {
    return (
      <div className='ColResponsive'>
        <Row gutter={10}>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
        </Row>
      </div>
    )
  }
}
