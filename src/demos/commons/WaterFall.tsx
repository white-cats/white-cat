import * as React from 'react'

import {Row, Col} from '../..'

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
      pendingItems: props.items,
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
            {leftItems.map((item, i) => template(item, i))}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div ref={this.saveRightContainer}>
            {rightItems.map((item, i) => template(item, i))}
          </div>
        </Col>
      </Row>
    )
  }
}
