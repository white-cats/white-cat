import * as React from 'react'
import {Link} from 'react-router-dom'

import {Col, Icon, Input, Row} from '../..'
import components, {IDemo} from '../components'

interface IViewHomeProps {}

interface IViewHomeState {
  searchKey: string
}

export default class ViewHome extends React.Component<IViewHomeProps, IViewHomeState> {
  state: IViewHomeState = {
    searchKey: ''
  }

  onSearchKeyChange = (e: any, searchKey: string) => {
    this.setState({searchKey})
  }

  onSearchKeyClear = () => {
    this.setState({searchKey: ''})
  }

  filterComponents = (items: IDemo[]) => {
    const searchKey = this.state.searchKey.trim().toLowerCase()

    if (!searchKey) {
      return items
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchKey) > -1
    })
  }

  render () {
    const {searchKey} = this.state

    return (
      <div className='ViewHome'>
        <div className='ViewHome__title'>
          <span>White Cat</span>
          <span>React 组件库</span>
        </div>
        <div className='ViewHome__search'>
          <Input
            size='large'
            placeholder={`共${components.length}个组件`}
            suffix={<Icon name={searchKey ? 'close' : 'search'} color='gray' onClick={this.onSearchKeyClear}/>}
            value={searchKey}
            onChange={this.onSearchKeyChange}/>
        </div>
        <div className='ViewHome__list'>
          <Row gutter={10}>
            {this.filterComponents(components).map((item, i) => (
              <Col key={i} xs={24} sm={12} md={6} lg={3}>
                <Link to={`/${item.title}`}>
                  <div className='ViewHome__item'>
                    <Icon fit name='puzzle-piece'>{item.title}</Icon>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}
