import React from 'react'
import { connect } from 'react-redux'

import { addCoffee, processOrder } from '../actions'

const Order = (props) => {
  const { coffees, menu, dispatch } = props

  const addNewCoffee = (name, price) => {
    const id = coffees.length + 1
    const newCoffee = {
      id,
      name,
      cupState: 'new',
      price
    }
    dispatch(addCoffee(newCoffee))
  }

  const orderCoffee = () => {
    dispatch(processOrder(coffees))
  }

  return (
    <div className="order-screen">
      <div className="order-screen__buttons">
        {menu.map(menuItem => {
          return (
            <button
              key={menuItem.id}
              className="order-screen__button"
              onClick={() => addNewCoffee(menuItem.name, menuItem.price)}
            >
              {menuItem.name}
            </button>
          )
        })}
      </div>
      <ul className="order-screen__list">
        {coffees.map(coffee => (
          <li className="docket-list__item" key={coffee.id}>{coffee.name}</li>
        ))}
      </ul>
      <div className="order-screen__buy">
        <button
          className="order-screen__button"
          onClick={orderCoffee}
        >
          Buy
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    coffees: globalState.coffees,
    menu: globalState.menu
  }
}

export default connect(mapStateToProps)(Order)
