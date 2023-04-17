import React, { useState } from 'react'
import axios from 'axios';
import styles from './valo.module.css'
import THead from './Tournament Pages/THead';


const Valo = () => {
  let button1 = false;
  let button2 = false;
  let button3 = false;
  let button4 = false;
  let button5 = false;

  const APIKEY = 'RGAPI-bafb939a-cf22-48cd-b1aa-986e105d5640'
                // RGAPI-a28585e1-cfe1-43e9-bcd8-4e1d0067c860
  const[changeColor1, setChangeColor1] = useState('#ff3333')
  const[changeColor2, setChangeColor2] = useState('#ff3333')
  const[changeColor3, setChangeColor3] = useState('#ff3333')
  const[changeColor4, setChangeColor4] = useState('#ff3333')
  const[changeColor5, setChangeColor5] = useState('#ff3333')
  const [data, setData] = useState({ teamName: "",
                                     p1Name: "",
                                     p1Tag: "", 
                                     p2Name: "",
                                     p2Tag: "", 
                                     p3Name: "",
                                     p3Tag: "", 
                                     p4Name: "",
                                     p4Tag: "", 
                                     p5Name: "",
                                     p5Tag: "", 
                                    });

  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(button1 && button2 && button3 && button4 && button5)console.log("verified");
    else console.log("Not");
  }

  const handleOnVerify1 = async (playerNo) => {
    let playerName=data.p1Name;
    let playerTag=data.p1Tag;
    const APICallString = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${playerName}/${playerTag}?api_key=${APIKEY}`
    axios.get(APICallString)
    .then(res =>{
      if(res.status === 200){
        button1=true;
        setChangeColor1('#00ff00');
      }
      console.log(1);
    })
    .catch(err => console.log(err));
  }

  const handleOnVerify2 = async (playerNo) => {
    let playerName=data.p2Name;
    let playerTag=data.p2Tag;
    const APICallString = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${playerName}/${playerTag}?api_key=${APIKEY}`
    axios.get(APICallString)
    .then(res =>{
      if(res.status === 200){
        button2=true
        setChangeColor2('#00ff00');
      }
      console.log(2);
    })
    .catch(err => console.log(err));
  }

  const handleOnVerify3 = async (playerNo) => {
    let playerName=data.p3Name;
    let playerTag=data.p3Tag;
    const APICallString = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${playerName}/${playerTag}?api_key=${APIKEY}`
    axios.get(APICallString)
    .then(res =>{
      if(res.status === 200){
        button3=true
        setChangeColor3('#00ff00');
      }
      console.log(3);
    })
    .catch(err => console.log(err));
  }

  const handleOnVerify4 = async (playerNo) => {
    let playerName=data.p4Name;
    let playerTag=data.p4Tag;
    const APICallString = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${playerName}/${playerTag}?api_key=${APIKEY}`
    axios.get(APICallString)
    .then(res =>{
      if(res.status === 200){
        button4=true
        setChangeColor4('#00ff00');
      }
      console.log(4);
    })
    .catch(err => console.log(err));
  }

  const handleOnVerify5 = async (playerNo) => {
    let playerName=data.p5Name;
    let playerTag=data.p5Tag;
    const APICallString = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${playerName}/${playerTag}?api_key=${APIKEY}`
    axios.get(APICallString)
    .then(res =>{
      if(res.status === 200){
        button5=true
        setChangeColor5('#00ff00');
      }
      console.log(5);
    })
    .catch(err => console.log(err));
  }
  // const handleClick = () => {
  //   setChangeColor(!changeColor)
  // }

  return (
      <>
      <THead/>
    <div className={styles.box} style={{padding: '100px 0 0 100px' ,height: '800px', width: '1519px' ,
    // backgroundColor:'#3C096C' 
    }}>
      <h2 style={{color: 'white'}}>Create Your Team</h2>
      <form method='POST' onSubmit={handleOnSubmit} className={styles.form}>
        <input type='text' 
        placeholder='Team Name' 
        name='teamName'
        onChange={handleChange}
        value={data.teamName}
        // required
        ></input><br/>
        <input type='text' 
        placeholder='Player 1 Game name' 
        name='p1Name'
        onChange={handleChange}
        value={data.p1Name}
        // required
        ></input>
        <input type='text' 
        placeholder='Player 1 Tag Line' 
        name='p1Tag'
        onChange={handleChange}
        value={data.p1Tag}
        // required
        ></input>

        
        <button type="button" onClick={handleOnVerify1} style={{backgroundColor: changeColor1}}>
							Verify
			</button><br/>
        <input type='text' 
        placeholder='Player 2 Game name' 
        name='p2Name'
        onChange={handleChange}
        value={data.p2Name}
        // required
        ></input>
        <input type='text' 
        placeholder='Player 2 Tag Line' 
        name='p2Tag'
        onChange={handleChange}
        value={data.p2Tag}
        // required
        ></input>
        {/* <button className='verify2' style={{backgroundColor: {changeColor}}} >True</button> */}

        <button type="button" onClick={handleOnVerify2} style={{backgroundColor: changeColor2}}>
							Verify
			</button><br/>
        <input type='text' 
        placeholder='Player 3 Game name' 
        name='p3Name'
        onChange={handleChange}
        value={data.p3Name}
        // required
        ></input>
        <input type='text' 
        placeholder='Player 3 Tag Line' 
        name='p3Tag'
        onChange={handleChange}
        value={data.p3Tag}
        // required
        ></input>
                {/* <button className='verify3' style={{backgroundColor: {changeColor}}} >True</button> */}

        <button type="button" onClick={handleOnVerify3} style={{backgroundColor: changeColor3}}>
							Verify
			</button><br/>
        <input type='text' 
        placeholder='Player 4 Game name' 
        name='p4Name'
        onChange={handleChange}
        value={data.p4Name}
        // required
        ></input>
        <input type='text' 
        placeholder='Player 4 Tag Line' 
        name='p4Tag'
        onChange={handleChange}
        value={data.p4Tag}
        // required
        ></input>
                {/* <button className='verify4' style={{backgroundColor: {changeColor}}} >True</button> */}

        <button type="button" onClick={handleOnVerify4} style={{backgroundColor: changeColor4}}>
							Verify
			</button><br/>
        <input type='text' 
        placeholder='Player 5 Game name' 
        name='p5Name'
        onChange={handleChange}
        value={data.p5Name}
        // required
        ></input>
        <input type='text' 
        placeholder='Player 5 Tag Line' 
        name='p5Tag'
        onChange={handleChange}
        value={data.p5Tag}
        // required
        ></input>
          {/* <button className='verify5' style={{backgroundColor: {changeColor}}} >True</button> */}
        <button type="button" onClick={handleOnVerify5} style={{backgroundColor: changeColor5}}>
							Verify
			</button><br/>
        {error && <div>{error}</div>}
        <button type="submit" >
							Submit
			</button>
      </form>
    </div>
        </>
  )
}

export default Valo