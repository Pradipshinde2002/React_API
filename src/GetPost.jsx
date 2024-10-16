import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetPost() {

    const [data,setData]=useState({
        id:'',
        username:'',
        email:"",
        phone:""
    })

    const [info,setInfo]=useState([])

    function textHandler(e){

        setData({...data,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((Response)=>{
            setInfo(Response.data)
        })
    },[])

    function submitHandler(e){
        e.preventDefault();
        console.log(data)

        axios.post("https://jsonplaceholder.typicode.com/users",data).then((Response)=>{
            console.log(Response)
            setInfo([...info,{...data}])
        })

    }      
  return (
    <>
     <form onSubmit={submitHandler} action="" className='mt-5 bg-warning w-50 mx-auto d-flex justify-content-center align-items-center flex-column'>

    <input type='text' name="id" onChange={textHandler} placeholder='enter id'/><br></br><br></br>
    <input type='text' name="username" onChange={textHandler} placeholder='enter username'/><br></br><br></br>
    <input type='text' name="email" onChange={textHandler} placeholder='enter email'/><br></br><br></br>
    <input type='text' name="phone" onChange={textHandler} placeholder='enter phone'/><br></br><br></br>
    <button type='submit'>Submit</button>

    </form>

    <table>
        {
            info.map((e)=>{
                return(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                    </tr>
                )
            })
        }
    </table>
    </>
  )
}

export default GetPost