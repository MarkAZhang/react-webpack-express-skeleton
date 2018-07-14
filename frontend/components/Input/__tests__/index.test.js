import React from 'react'
import { shallow } from 'enzyme'

import Input from '../index'

describe('input', () => {
  test('basic rendering', () => {
    expect(
      shallow(
        <Input className='specialClass' />
      ).containsMatchingElement(
        <input className='specialClass' />
      )
    ).toBe(true)
  })

  test('onChange is only called on blur', () => {
    const onChangeFn = jest.fn()

    const wrapper = shallow(
      <Input className='specialClass' onChange={onChangeFn} value='abc' />
    )

    wrapper.simulate('change', { currentTarget: { value: 'new value' }})
    expect(wrapper.prop('value')).toBe('new value')
    wrapper.simulate('change', { currentTarget: { value: 'new value 2' }})
    expect(wrapper.prop('value')).toBe('new value 2')
    wrapper.simulate('change', { currentTarget: { value: 'new value 3' }})
    expect(wrapper.prop('value')).toBe('new value 3')

    expect(onChangeFn).toBeCalledTimes(0)

    wrapper.simulate('blur')

    expect(onChangeFn).toBeCalledTimes(1)
    expect(onChangeFn).lastCalledWith('new value 3')
  })

  test('new value passed into Input forces value change', () => {
    const onChangeFn = jest.fn()

    const wrapper = shallow(
      <Input className='specialClass' onChange={onChangeFn} value='abc' />
    )

    wrapper.simulate('change', { currentTarget: { value: 'new value' }})
    expect(wrapper.prop('value')).toBe('new value')

    wrapper.setProps({ value: 'passed value' })
    expect(wrapper.prop('value')).toBe('passed value')

    wrapper.simulate('change', { currentTarget: { value: 'new value 2' }})
    expect(wrapper.prop('value')).toBe('new value 2')
  })

  test('pressing Enter causes Input to blur', () => {
    const inputBlur = jest.fn()

    const wrapper = shallow(
      <Input className='specialClass' value='abc' />
    )

    wrapper.simulate('change', { currentTarget: { value: 'new value' }})
    expect(wrapper.prop('value')).toBe('new value')

    expect(inputBlur).toBeCalledTimes(0)

    wrapper.simulate('keydown', { key: 'Enter', currentTarget: { blur: inputBlur }})

    expect(inputBlur).toBeCalledTimes(1)
  })
})
