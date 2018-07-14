import React from 'react'
import { shallow } from 'enzyme'

import Icon from '../index'

describe('icon', () => {
  test('basic rendering', () => {
    expect(
      shallow(
        <Icon className='specialClass' glyph='test' />
      ).containsMatchingElement(
        <i className='icon-test specialClass' name='test' />
      )
    ).toBe(true)
  })
})
