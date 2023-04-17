import React, {useState} from 'react'
import axios from 'axios'
// import './App.css';

function Player() {
//   const [searchText, setSearchText] = useState("")
const [tagLine, setTagLine] = useState("")
const [gameName, setGameName] = useState("")
const [playerData, setPlayerData] = useState({})
  const API_KEY = "RGAPI-a28585e1-cfe1-43e9-bcd8-4e1d0067c860"
  
  function searchForPlayer(event){
    //set up correct API call
    // var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ searchText +"?api_key="+ API_KEY
    // var APICallString = "https://na1.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}"+ searchText +"?api_key="+ API_KEY
    var APICallString = "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + gameName + "/" + tagLine + "?api_key="+ API_KEY
    //Handle the API call
    axios.get(APICallString).then(function (response) {
      //Success
      console.log(response)
    //   setPlayerData(response.data)
    }).catch(function(error){
      //error
      console.log(error)
    })
  }



  console.log(playerData);


  
  return (
    <div className="App">
      <div className="container">
        <h3>League of Legends</h3>
        {/* <input type="text" placeholder='Summoner Name' onChange={e => setSearchText(e.target.value)}></input> */}
        <input type="text" placeholder='tagLine' onChange={e => setTagLine(e.target.value)}></input>
        <input type="text" placeholder='gameName' onChange={e => setGameName(e.target.value)}></input>
        <br/><button onClick={e => searchForPlayer(e)}>Search for Player</button>
        {/* {JSON.stringify(playerData) !== '{}' ? 
          <> 
             <p>Player Verified</p>
             <p>{playerData.name}</p>
             <img width='100' height='100' src={'http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/' +playerData.profileIconId+ '.png'} alt='Player Profile Img'></img> 
             <p>Summoner Level : {playerData.summonerLevel}</p>
          </> 
          : 
          <> <p>Player not found</p> </>
        } */}
      </div>
    </div>
  );
}


export default Player;