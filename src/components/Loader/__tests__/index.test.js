import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../index'

describe('loader', () => {
  test('basic rendering', () => {
    expect(
      shallow(
        <Loader className='specialClass' />
      ).containsMatchingElement(
        <div className='loader specialClass'>
          <img className='loaderIcon' src='test-file-stub' alt='loading icon' />
        </div>
      )
    ).toBe(true)
  })
})
