import * as React from 'react'
import * as marked from 'marked'
import * as hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
})

interface IExampleProps {
  demo: React.ComponentClass,
  raw: string,
  title: string,
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

  toHtml = (raw: string) => {
    return marked('```tsx\n' + raw.replace('../../../components', 'white-cat') + '\n```')
  }
  
  render () {
    const {demo: Demo, raw, title, description} = this.props
    const {expanded} = this.state

    const html = this.toHtml(raw)

    return (
      <div className='Example'>
        <div className='Example__content'>
          <div className='Example__demo'>
            <Demo/>
            <div className='Example__toggle' onClick={this.onToggle}>{expanded ? '收起' : '展开'}</div>
          </div>
          {expanded && <div className='Example__raw' dangerouslySetInnerHTML={{__html: html}}/>}
        </div>
        <div className='Example__text'>
          <div className='Example__title'>{title}</div>
          <div className='Example__description'>{description}</div>
        </div>
      </div>
    )
  }
}