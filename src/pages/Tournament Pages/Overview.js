import React, { useEffect, useState } from 'react'
import THead from './THead'
import { getUserDetails } from '../Helper';

const Overview = () => {
    const [tour, setTournament] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() =>{
        getUserDetails().then(data => {
            setTournament(data)
            console.log(tour);
        }).catch(err => console.log(err));
    },[])

const queryParameters = new URLSearchParams(window.location.search)
  const tId = queryParameters.get("id")
  const mode = queryParameters.get("mode")
  const server = queryParameters.get("server")
  const date = queryParameters.get("date")
  const time = queryParameters.get("time")
  const teamNo = queryParameters.get("teamNo")
  const teams = queryParameters.get("teams")
  const arr = teams.split(",")
  console.log(arr[3])
  let teamName = arr[1].slice(12);
  teamName = teamName.slice(0, teamName.length-1)
    let player1 = arr[2].slice(11);
    player1 = player1.slice(0, player1.length-1)
    let p1Tag = arr[3].slice(18);
    p1Tag = p1Tag.slice(0, p1Tag.length-1)

    let player2 = arr[2].slice(11);
    player2 = player2.slice(0, player2.length-1)
    let p2Tag = arr[3].slice(18);
    p2Tag = p2Tag.slice(0, p2Tag.length-1)

    let player3 = arr[2].slice(11);
    player3 = player3.slice(0, player3.length-1)
    let p3Tag = arr[3].slice(18);
    p3Tag = p3Tag.slice(0, p3Tag.length-1)

    let player4 = arr[2].slice(11);
    player4 = player4.slice(0, player4.length-1)
    let p4Tag = arr[3].slice(18);
    p4Tag = p4Tag.slice(0, p4Tag.length-1)

    let player5 = arr[2].slice(11);
    player5 = player5.slice(0, player5.length-1)
    let p5Tag = arr[3].slice(18);
    p5Tag = p5Tag.slice(0, p5Tag.length-1)
  console.log(teamName, player5, p5Tag)



  return (
    <div style={{backgroundColor: '#3C096C', color: 'white'}}>
        <THead
        tId = {tId}
        teamName = {teamName}
        p1 = {player1}
        p1t = {p1Tag}
        p2 = {player2}
        p2t = {p2Tag}
        p3 = {player3}
        p3t = {p3Tag}
        p4 = {player4}
        p4t = {p4Tag}
        p5 = {player5}
        p5t = {p5Tag}
        />
    
      <h3>Overview</h3>
      <div>
        <p>Mode: {mode}</p>
        <p>Server: {server}</p>
        <p>Entry Fee: Free</p>
        <p>Starts at: {date} {time}</p>
     </div>
     <div>
        <h3>Available Slots</h3><br/>
        <p>Filled Slots       {teamNo}/2</p>
     </div>
    </div>
  )
}

export default Overview
