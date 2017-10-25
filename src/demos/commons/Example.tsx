import 'highlight.js/styles/atom-one-light.css'

import * as hljs from 'highlight.js'
import * as marked from 'marked'
import * as React from 'react'

import {ScrollBar} from '../..'

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
})

interface IExampleProps {
  component?: React.ComponentClass,
  raw?: string,
  description: string
}

interface IExampleState {
  expanded: boolean
}

export default class Example extends React.Component<IExampleProps, IExampleState> {

  constructor (props: IExampleProps) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  onToggle = () => {
    this.setState({expanded: !this.state.expanded})
  }

  markdownText = (raw: string = '') => {
    return marked(raw)
  }

  highLightCode = (raw: string = '') => {
    return marked('```tsx\n' + raw.replace('../../../components', 'white-cat') + '\n```')
  }
  
  render () {
    const {component: Component, raw, description} = this.props
    const {expanded} = this.state

    const html = this.highLightCode(raw)
    const text = this.markdownText(description)

    // return (
    //   <div className='Example'>
    //     <div className='Example__content'>
    //       <div className='Example__demo'>
    //         {Component && <Component/>}
    //         <div className='Example__toggle' onClick={this.onToggle}>{expanded ? '收起' : '展开'}</div>
    //       </div>
    //       {expanded && <div className='Example__raw' dangerouslySetInnerHTML={{__html: html}}/>}
    //     </div>
    //     <div className='Example__text' dangerouslySetInnerHTML={{__html: text}}/>
    //   </div>
    // )

    return (
      <div className='Example'>
        <div className='Example__demo'>
          {Component && <Component/>}
        </div>
        <div className='Example__text'>
          <div dangerouslySetInnerHTML={{__html: text}}/>
          <div className='Example__toggle' onClick={this.onToggle}>{expanded ? '收起' : '展开'}</div>
        </div>
        {expanded && (
          <ScrollBar stopPropagation direction='horizontal' className='Example__raw'>
            <div dangerouslySetInnerHTML={{__html: html}}/>
          </ScrollBar>
        )}
      </div>
    )
  }
}
