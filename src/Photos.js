import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

function Photos() {
    const [photosData,setphotosData]=useState([])
    function photosHandler(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then((Response)=>{
           setphotosData(Response.data)
        })

    }
  return (
    <>
    <Layout />
    <div>
        <button onClick={photosHandler}>Photos Data</button>
    </div>

    <table style={{margin:"50px", border:"2px solid green"}}>
        {
            photosData.map((e)=>{
                return(
                    
                  <tr>
                    <td style={{border:"2px solid red"}}>{e.id}</td>
                    <td style={{border:"2px solid red"}}>{e.title}</td>
                    <td style={{border:"2px solid red"}}>{e.url}</td>
                  </tr>
                  
                )
            })
        }
    </table>
    </>
    
  )
}

export default Photos