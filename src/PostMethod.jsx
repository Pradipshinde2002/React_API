import axios from 'axios';
import React, { useState } from 'react'

function PostMethod() {

    const [data,setData]=useState({
        id:'',
        username:'',
        email:"",
        phone:""
    })

    function textHandler(e){

        setData({...data,[e.target.name]: e.target.value})
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(data)

        axios.post("https://jsonplaceholder.typicode.com/users",data).then((Response)=>{
            console.log(Response)
        })
    }
  return (
    <>
    <form onSubmit={submitHandler} action="" className='mt-5 bg-warning w-50 mx-auto d-flex justify-content-center align-items-center flex-column'>

    <input type='text' name="id" onChange={textHandler} placeholder='enter id'/><br></br><br></br>
    <input type='text' name="username" onChange={textHandler} placeholder='enter username'/><br></br><br></br>
    <input type='text' name="email" onChange={textHandler} placeholder='enter email'/><br></br><br></br>
    <input type='text' name="phone" onChange={textHandler} placeholder='enter password'/><br></br><br></br>
    <button type='submit'>Submit</button>

    </form>
   
    </>
  )
}

export default PostMethod 