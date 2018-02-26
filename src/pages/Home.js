import { Component } from 'react'

import cs from './styles.css'

// TODO(mark): Replace placeholder header with real navigation
class Home extends Component {
  state = {
    text: '',
  }

  async componentWillMount() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 100)
    })
    this.setState({
      text: 'Hello World!',
    })
  }

  render() {
    return (
      <div className={cs.helloWorld}>
        {this.state.text}
      </div>
    )
  }
}

export default Home
