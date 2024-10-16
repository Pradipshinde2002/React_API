import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'

function PutDelete() {
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

        axios.put("https://jsonplaceholder.typicode.com/users/1",data).then((Response)=>{
            console.log(Response)
            setInfo([...info,{...data}])
        })

    }   
  return (
   <>
   <div>
   <form onSubmit={submitHandler} action="" className='mt-5 bg-warning w-50 mx-auto d-flex justify-content-center align-items-center flex-column'>

<input type='text' name="id" onChange={textHandler} placeholder='enter id'/><br></br><br></br>
<input type='text' name="username" onChange={textHandler} placeholder='enter username'/><br></br><br></br>
<input type='text' name="email" onChange={textHandler} placeholder='enter email'/><br></br><br></br>
<input type='text' name="phone" onChange={textHandler} placeholder='enter phone'/><br></br><br></br>
<button type='submit' onClick={updateHandler}>Update record</button>
<button type='submit'>Delete record</button>


</form>
   </div>
   </>
  )
}

export default PutDelete