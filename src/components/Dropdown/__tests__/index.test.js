import { shallow } from 'enzyme'

import Icon from '~/components/Icon'

import { InnerDropdown } from '../index'

describe('dropdown', () => {
  test('basic rendering', () => {
    expect(
      shallow(
        <InnerDropdown
          onChange={() => {}}
          open
          label='Test'
        >
          <div className='innerClass' />
        </InnerDropdown>
      ).containsMatchingElement(
        <div>
          <div>
            <div>Test</div>
            <div className='fill' />
            <Icon glyph='up-arrow' />
          </div>
          <div className='dropdown'>
            <div className='innerClass' />
          </div>
        </div>
      )
    ).toBe(true)
  })

  test('doesn\'t render dropdown when closed', () => {
    expect(
      shallow(
        <InnerDropdown
          onChange={() => { }}
          label='Test'
          open={false}
        >
          <div className='innerClass' />
        </InnerDropdown>
      ).containsMatchingElement(
        <div>
          <div>
            <div>Test</div>
            <div className='fill' />
            <Icon glyph='down-arrow' />
          </div>
        </div>
      )
    ).toBe(true)
  })

  test('clicking on dropdown menu toggles component', () => {
    const onChangeFn = jest.fn()

    const wrapper = shallow(
      <InnerDropdown
        onChange={onChangeFn}
        label='Test'
        open={false}
      >
        <div className='innerClass' />
      </InnerDropdown>
    )

    wrapper.find('.dropdownMenu').simulate('click')
    expect(onChangeFn).toBeCalledTimes(1)
    expect(onChangeFn).lastCalledWith(true)
  })
})
