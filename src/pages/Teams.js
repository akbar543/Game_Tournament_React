import React, { useState } from 'react'



function Teams() {
    const[inputarr, setInputArr]=useState([])

    // const[inputdata, SetInputData]=useState({name:"",rollno:""})
    const[inputdata, SetInputData]=useState({name:""})
    
    function changeHandle(e){

        SetInputData({
            ...inputdata,
            [e.target.name]:e.target.value
        })
        // console.log(inputdata);
    }

    let {name, rollno}=inputdata;
    function changeHandle1(){
        setInputArr([...inputarr,{name,rollno}])
        console.log(inputarr)
        console.log(inputdata, 'input data Entered')
        // SetInputData({name:"",rollno:""})
        SetInputData({name:""})
    }
    function changeHandle2(){
        console.log("Object stored in array", inputarr)
    }
  return (
    <div className='Teams'>
        <input 
            type="text" 
            autoComplete='off'
            name="name" 
            value={inputdata.name} 
            onChange={changeHandle}
            placeholder='Enter Name'/><br/>
        {/* <input 
            type="number" 
            autoComplete='off'
            name="rollno" 
            value={inputdata.rollno} 
            onChange={changeHandle}
            placeholder='Roll no'
        /> */}
        <button onClick={changeHandle1}>Add</button>
        <button onClick={changeHandle2}>Check Array in console</button>
    
        <table border={1} width="15%" cellPadding={10}>
            <tbody>
            <tr>
                <td>Name</td>
                {/* <td>Roll No</td> */}
            </tr>
            {
                inputarr.map(
                    (info,ind)=>{
                        return(
                            <tr>
                                <td>{info.name}</td>
                                {/* <td>{info.rollno}</td> */}
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    
    </div>
  )
}

export default Teams
