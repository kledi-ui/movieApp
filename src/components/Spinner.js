import React from 'react'
import spin from '../spin.gif';
function Spinner() {
  return (
    <div>
      <div className="spinner">
        <img src={spin} alt=""/>
      </div>
    </div>
  )
}

export default Spinner
