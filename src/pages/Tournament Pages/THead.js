import React from 'react'
// import img1 from './images/valo_design.svg'
// import img1 from './images/valo_banner_design.png';

const THead = ({tId, teamName, p1, p1t, p2, p2t, p3, p3t, p4, p4t, p5, p5t}) => {
  const str = `/Teams?id=${tId}`;
  const team = `/Bracket?tname=${teamName}&p1=${p1}&p1t=${p1t}&p2=${p2}&p2t=${p2t}&p3=${p3}&p3t=${p3t}&p4=${p4}&p4t=${p4t}&p5=${p5}&p5t=${p5t}`
  return (
    <div>
        <img style={{height:'400px' ,width: '100%'}} src='./images/2nd_valo_banner_design.png' alt='gaming img'></img>
        <div style={{display: 'flex', backgroundColor:'#3C096C', fontSize: '20px', fontWeight: '700'}}>
          <a style={{paddingLeft: '20px', textDecoration: 'none', color:'#FF6D00'}} href='/Overview' >Overview</a><p></p>
          <a style={{paddingLeft: '20px', textDecoration: 'none', color:'#FF6D00'}} href={team}>Bracket</a><p></p>
          <a style={{paddingLeft: '20px', textDecoration: 'none', color:'#FF6D00'}} href={str}>Teams</a><p></p>
          <a style={{paddingLeft: '20px', textDecoration: 'none', color:'#FF6D00'}} href='/Rules'>Rules</a>
        </div>
    </div>
  )
}

export default THead  
