import React from 'react';


const  TournamentCard= ({tArr}) => {

console.log(JSON.stringify(tArr))
const str = `/Overview?id=${tArr._id}&mode=${tArr.Mode}&server=${tArr.Server}&date=${tArr.Date}&time=${tArr.Time}&teamNo=${tArr.allTeams.length}&teams=${JSON.stringify(tArr.allTeams)}`

  return (
  
<div className='tour-main'>   
   {/* <h2 class="line-title-switch" >Tournaments</h2> */}
<div class="tour-card">
  <a href={str} className='none' target=''>
  <div class='card-main'>
    {/* <img class='card-img' src={tArr.img} alt="COD" /> */}
    <h2 className='tour-title'>{tArr.Server}</h2>
    <p class='card-content'>{tArr.Date}</p>
    <div class='card-mid'>
      <div class="card-mid-l">
        {/* <ins>◘</ins> */}
        <p>{tArr.Mode}</p>
      </div>
      <div class="card-mid-r">
        {/* <ins>◷</ins> */}
        <p>{tArr.allTeams}</p>
      </div>
    </div>
    <hr />
    <div className='card-footer'>
      {/* <div class='wrapper'>
        <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
      </div> */}
      <p className='tour-prize'><ins></ins> {tArr.allTeams.length}</p>
    </div>
    
  </div>
      </a>
</div>
</div>  
  );
}

export default TournamentCard;


