import React from 'react'
import THead from './THead'

const Overview = () => {
  return (
    <div style={{backgroundColor: '#3C096C', color: 'white'}}>
        <THead/>
      <h3>Overview</h3>
      <div>
        <p>Mode: 1v1 Spike Rush</p>
        <p>Server: Asia</p>
        <p>Entry Fee: Free</p>
        <p>Starts at: 04/17/2023 9:30 PM</p>
     </div>
     <div>
        <h3>Available Slots</h3><br/>
        <p>Filled Slots       0/2</p>
     </div>
    </div>
  )
}

export default Overview
