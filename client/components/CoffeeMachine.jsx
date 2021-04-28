import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setMachineState, setCoffeeStatus } from '../actions'

import Cup from './Cup'

const CoffeeMachine = (props) => {
  const { machineState, dispatch, order } = props
  const [currentCup, setCurrentCup] = useState(0)

  const setHeating = () => {
    dispatch(setMachineState('heating'))
    setTimeout(() => {
      dispatch(setMachineState('ready'))
      dispatch(setCoffeeStatus(currentCup, 'ready'))
    }, 4000)
  }

  const setPouring = () => {
    dispatch(setMachineState('pouring'))
    dispatch(setCoffeeStatus(currentCup, 'pour'))
    setTimeout(() => {
      dispatch(setCoffeeStatus(currentCup, 'done'))
      if (currentCup + 1 < order.length) {
        dispatch(setCoffeeStatus(currentCup + 1, 'ready'))
        setCurrentCup(currentCup + 1)
        dispatch(setMachineState('ready'))
      } else {
        dispatch(setMachineState('off'))
      }
    }, 3000)
  }

  return (
    <div>
      <div className={`cm cm--${machineState}`}>
        <div className="cm-head shakeable">
          <div className="cm-head__gauge">
            <div className="cm-head__heat-indicator"></div>
            <div className="cm-head__arrow"></div>
          </div>
          <div className="cm-head__status-light"></div>
        </div>
        <div className="cm-body">
          <div className="cm-drip"></div>
          {order.map((coffee, i) => <Cup key={coffee.id} coffee={coffee} index={i} />) }
        </div>
        <div className="cm-base">
        </div>
      </div>
      <button onClick={setHeating}>Heat machine</button>
      <button onClick={setPouring}>Pour coffee</button>
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    machineState: globalState.machineState,
    order: globalState.order
  }
}

export default connect(mapStateToProps)(CoffeeMachine)
