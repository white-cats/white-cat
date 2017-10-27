import * as React from 'react'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import * as TransitionGroup from 'react-transition-group/TransitionGroup'

import {Col, Row} from '../..'

interface IViewWaterFallProps {
  items: any[],
  template: (item: any, i: number) => React.ReactNode
}

interface IViewWaterFallState {
  pendingItems: any[],
  leftItems: any[],
  rightItems: any[]
}

export default class ViewWaterFall extends React.Component<IViewWaterFallProps, IViewWaterFallState> {

  timer: any
  leftContainer: HTMLElement | null
  rightContainer: HTMLElement | null

  constructor (props: IViewWaterFallProps) {
    super(props)
    this.state = {
      pendingItems: [...props.items],
      leftItems: [],
      rightItems: []
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      const {leftContainer, rightContainer} = this
      const {pendingItems, leftItems, rightItems} = this.state

      if (pendingItems.length && leftContainer && rightContainer) {
        const diff = leftContainer.offsetHeight - rightContainer.offsetHeight
        const item = pendingItems.shift()

        if (diff > 0) {
          this.setState({rightItems: [...rightItems, item], pendingItems})
        } else {
          this.setState({leftItems: [...leftItems, item], pendingItems})
        }
      } else {
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
        }
      }
    }, 0)
  }

  componentWillUnmount () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  saveLeftContainer = (node: HTMLElement | null) => {
    this.leftContainer = node
  }

  saveRightContainer = (node: HTMLElement | null) => {
    this.rightContainer = node
  }

  render () {
    const {template} = this.props
    const {leftItems, rightItems} = this.state

    return (
      <Row className='WaterFall' gutter={8}>
        <Col xs={24} md={12}>
          <div ref={this.saveLeftContainer}>
            <TransitionGroup>
              {leftItems.map((item, i) => (
                <CSSTransition
                  key={i}
                  classNames='WaterFallItem'
                  timeout={300}>
                  {template(item, i)}
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div ref={this.saveRightContainer}>
            <TransitionGroup>
              {rightItems.map((item, i) => (
                <CSSTransition
                  key={i}
                  classNames='WaterFallItem'
                  timeout={300}>
                  {template(item, i)}
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </Col>
      </Row>
    )
  }
}
