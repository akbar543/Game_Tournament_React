import React from 'react'
import THead from './THead'

const Bracket = () => {
        const queryParameters = new URLSearchParams(window.location.search)
  const tname = queryParameters.get("tname");
  const p1 = queryParameters.get("p1"); 
  const p1Tag = queryParameters.get("p1t"); 
  const p2 = queryParameters.get("p2"); 
  const p2Tag = queryParameters.get("p2t"); 
  const p3 = queryParameters.get("p3"); 
  const p3Tag = queryParameters.get("p3t"); 
  const p4 = queryParameters.get("p4"); 
  const p4Tag = queryParameters.get("p4t"); 
  const p5 = queryParameters.get("p5"); 
  const p5Tag = queryParameters.get("p5t"); 
  return (
    <div>
        <THead/>
      <h3>Bracket</h3>
       {tname}<br/>
       {p1}<br/>
       {p1Tag}<br/>
       {p2}<br/>
       {p2Tag}<br/>
       {p3}<br/>
       {p3Tag}<br/>
       {p4}<br/>
       {p4Tag}<br/>
       {p5}<br/>
       {p5Tag}
    </div>
  )
}

export default Bracket
