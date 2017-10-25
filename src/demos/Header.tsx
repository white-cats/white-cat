import * as React from 'react'
import {Link} from 'react-router-dom'

import {Button, Container} from '..'

interface IHeaderProps {}

interface IHeaderState {}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  render () {
    const {} = this.props

    return (
      <Container className='Header'>
        <div className='Header__top'>
          <div className='Header__top-content'>
            <Link to='/'>WHITE CAT</Link>
          </div>
          <div className='Header__top-right'>
            <a href='https://github.com/white-cats/white-cat'>
              <Button basic size='small' icon='github'>Github</Button>
            </a>
          </div>
        </div>
      </Container>
    )
  }
}
