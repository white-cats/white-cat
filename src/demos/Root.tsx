import './components'
import './styles.less'

import * as React from 'react'
import {Route, Switch} from 'react-router'

import {Container} from '..'
import Header from './Header'
import ViewComponent from './views/ViewComponent'
import ViewHome from './views/ViewHome'

interface IRootProps {}

interface IRootState {}

export default class Root extends React.Component<IRootProps, IRootState> {
  render () {
    return (
      <div className='Root'>
        <Header/>
        <Container>
          <Switch>
            <Route path='/:name' component={ViewComponent}/>
            <Route path='/' component={ViewHome}/>
          </Switch>
        </Container>
      </div>
    )
  }
}
