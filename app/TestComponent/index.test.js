import { describe } from 'ava-spec'

import TestComponent from './index.jsx' // eslint-disable-line no-unused-vars

describe('TestComponent', it => {
  it('should work', t => {
    t.true(true)
  })

  it('should work', t => {
    t.true(true)
  })

  it.todo('should not run')
})
