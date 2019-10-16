import React from 'react'

function Stars({vote}) {


  const starPercentageRounded = `${Math.round(vote) * 10}%`;

  return (
    <div className="mb">
      <div className="stars-outer">
            <div className="stars-inner" style={{
              width:`${starPercentageRounded}`
            }}></div>
          </div>
    </div>
  )
}

export default Stars
