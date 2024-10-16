import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

function Comments() {
    const [commentData,setcommentData]=useState([])
    function commentsHandler(){
        axios.get("https://jsonplaceholder.typicode.com/comments").then((Response)=>{
           setcommentData(Response.data)
        })

    }
  return (
    <>
    <Layout />
    <div>
        <button onClick={commentsHandler}>Comments Data</button>
    </div>

    <table style={{margin:"50px", border:"2px solid green"}}>
        {
            commentData.map((e)=>{
                return(
                    
                  <tr>
                    <td style={{border:"2px solid red"}}>{e.id}</td>
                    <td style={{border:"2px solid red"}}>{e.name}</td>
                    <td style={{border:"2px solid red"}}>{e.email}</td>
                  </tr>
                  
                )
            })
        }
    </table>
    </>
    
  )
}

export default Comments