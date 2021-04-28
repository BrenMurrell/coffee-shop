import React from 'react'

const Cup = ({ coffee, index }) => {
  return (
    <>
      <div
        className={`cm-cup cm-cup--${coffee.cupState}`}
        style={{ marginLeft: `${index * 16}px` }}
      >
        <img className="cm-cup__steam" src="/images/steam.gif" alt=""/>
        <div className="cm-cup__handle"></div>
        <div className="cm-cup__body"></div>
      </div>
    </>
  )
}

export default Cup
