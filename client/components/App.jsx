import React from 'react'
import { connect } from 'react-redux'

import CoffeeMachine from './CoffeeMachine'
import Docket from './Docket'
import Order from './Order'

function App (props) {
  return (
    <>
      <div className='app'>
        <h1>Welcome to the shop</h1>
        <div className="stage">
          <Order />
          <CoffeeMachine />
          <Docket />
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
