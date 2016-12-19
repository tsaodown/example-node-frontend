// @flow

import React from 'react'

import TestComponent from '../components/testcomponent'
import NextComponent from '../components/nextcomponent'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <p>Base Frontend Server has arrived.</p>
        <TestComponent start={10} increment={1}/>
        <NextComponent/>
      </div>
    )
  }
}
