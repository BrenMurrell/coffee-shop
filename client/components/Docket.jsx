import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Docket = (props) => {
  const { order } = props
  const [grandTotal, setGrandTotal] = useState(0)

  useEffect(() => {
    // console.log('update order')
    let orderTotal = 0
    order.map(orderItem => {
      orderTotal += orderItem.price
    })
    setGrandTotal(orderTotal)
  }, [order])

  return (
    <div className="docket">
      <h2 className="docket__address">Bren&apos;s Coffee Shop</h2>
      <h3 className="docket__heading">Order<br/>~~~~~~</h3>
      <ul className="docket-list">
        {order.map(orderItem => (
          <li key={orderItem.id} className={`docket-list__item ${orderItem.cupState}`}>
            <span>{orderItem.name}</span>
            <span>$ {orderItem.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="docket-total">
        <p className="docket-list__item">
          <span>GRAND TOTAL:</span>
          <span>$ {grandTotal.toFixed(2)}</span>
        </p>
      </div>
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    order: globalState.order
  }
}

export default connect(mapStateToProps)(Docket)
