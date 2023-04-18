import axios from "axios";

export const getUserDetails = async(id) => {
    const res = await axios.get(`http://localhost:8080/api/tour`).catch(err => console.log(err));
    if(res.status !== 200){
        return console.log("no data found");
    }

    const resData = await res.data;
    console.log(resData);
    return resData;
}


export const postTeam = async(id, teamName, Player1, Player1TagLine, Player2, Player2TagLine, Player3, Player3TagLine, Player4, Player4TagLine, Player5, Player5TagLine) => {
    const res = await axios.post(`http://localhost:8080/api/team/${id}/`, {
        "TeamName":teamName,
    "Player1": Player1,
    "Player1TagLine": Player1TagLine,
    "Player2": Player2,
    "Player2TagLine": Player2TagLine,
    "Player3": Player3,
    "Player3TagLine": Player3TagLine,
    "Player4": Player4,
    "Player4TagLine": Player4TagLine,
    "Player5": Player5,
    "Player5TagLine": Player5TagLine
    }).catch(err => console.log(err));
    if(res.status !== 200){
        return console.log("no data found");
    }

    const resData = await res.data;
    console.log(resData);
    return resData;
}