import * as cn from 'classnames'
import * as React from 'react'
import {Route, RouteComponentProps} from 'react-router'
import {Link} from 'react-router-dom'

import Example from '../commons/Example'
import ViewWaterFall from '../commons/WaterFall'
import components, {IDemo} from '../components'

interface IViewComponentProps extends RouteComponentProps<{name: string}> {}

interface IViewComponentState {}

export default class ViewComponent extends React.Component<IViewComponentProps, IViewComponentState> {

  renderDemo = (demo: IDemo) => {
    return (
      <div>
        <div className='ViewComponent__header'>
          <div className='ViewComponent__title'>{demo.title}</div>
        </div>
        <div className='ViewComponent__segments'>
          {demo.groups.map((group) => (
            <div className='ViewComponent__segment' key={group.title} id={`link-${group.title}`}>
              {demo.groups.length > 1 && (
                <a href={`#link-${group.title}`}>
                  <div className='ViewComponent__segment-title'># {group.title}</div>
                </a>
              )}
              <ViewWaterFall
                items={group.examples}
                template={({component, raw, description}, i) => (
                  <Example key={i} {...{component, raw, description}}/>
              )}/>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render () {
    const {name} = this.props.match.params
    const demo = components.find((d) => d.title === name)

    return (
      <div className='ViewComponent'>
        <ViewComponentLeft/>
        <div className='ViewComponent__container'>
          {demo ? (
            this.renderDemo(demo)
          ) : (
            <div>404</div>
          )}
        </div>
      </div>
    )
  }
}

interface IViewComponentLeftProps {}

function ViewComponentLeft (props: IViewComponentLeftProps) {
  return (
    <div className='ViewComponent__left'>
      {components.map((item: any) => (
        <Route key={item.title} path={`/${item.title}`} children={({match}) => (
          <Link to={`/${item.title}`}>
            <div className={cn('ViewComponent__left-item', {active: !!match})}>
              {item.title}
            </div>
          </Link>
        )}/>
      ))}
    </div>
  )
}
