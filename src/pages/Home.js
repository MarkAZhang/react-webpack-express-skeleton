// @flow
import { Component } from 'react'

import Dropdown from '~/components/Dropdown'

import cs from './styles.css'

const DROPDOWN_OPTIONS = [
  'one',
  'two',
  'three',
]

type Props = {}

type State = {
  text: string,
  selectedOption: string,
  open: boolean,
}

// TODO(mark): Replace placeholder header with real navigation
class Home extends Component<Props, State> {
  state = {
    text: '',
    selectedOption: 'one',
    open: false,
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

  onOpenChange = (open: boolean) => {
    this.setState({
      open,
    })
  }

  onOptionChange = (option: string) => {
    this.setState({
      selectedOption: option,
    })
    this.onOpenChange(false)
  }

  render() {
    const { open, selectedOption, text } = this.state

    return (
      <div className={cs.bgRect}>
        <div className={cs.helloWorld}>{text}</div>
        <div className={cs.header}>This is a dropdown</div>
        <div className={cs.dropdownContainer}>
          <Dropdown
            open={open}
            onChange={this.onOpenChange}
            label={selectedOption}
          >
            <div className={cs.dropdown}>
              {DROPDOWN_OPTIONS.map(option => (
                <div className={cs.option} onClick={() => this.onOptionChange(option)} key={option}>
                  {option}
                </div>
              ))}
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Home
