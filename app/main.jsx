// @flow

import React from 'react'
import { render } from 'react-dom'

import Test from './Test/test'
import Next from './Next/next'

render((
  <div>
    <p>Base Frontend Server has arrived.</p>
    <Test start={10} increment={1}/>
    <Next/>
  </div>
), document.getElementById('app'))
