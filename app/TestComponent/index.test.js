import React from 'react'
import { describe } from 'ava-spec'
import { shallow } from 'enzyme'

import TestComponent from './index.jsx'

describe('TestComponent', it => {
  it('should have odd class', t => {
    let actual = shallow(<TestComponent start={1}/>)
    t.true(actual.find('span').hasClass('odd'))
  })

  it('should have even class', t => {
    let actual = shallow(<TestComponent start={2}/>)
    t.true(actual.find('span').hasClass('even'))
  })

  it('should have fives class', t => {
    let actual = shallow(<TestComponent start={5}/>)
    t.true(actual.find('span').hasClass('fives'))
  })

  it('should have fives class', t => {
    let actual = shallow(<TestComponent start={10}/>)
    t.true(actual.find('span').hasClass('ten'))
  })

  it('should increment on click', t => {
    let actual = shallow(<TestComponent/>)
    t.is(actual.state().likesCount, 0)
    actual.find('button').simulate('click')
    t.is(actual.state().likesCount, 1)
  })
})
