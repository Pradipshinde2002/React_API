import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

function Album() {
    const [albumData,setalbumData]=useState([])
    function albumHandler(){
        axios.get("https://jsonplaceholder.typicode.com/albums").then((Response)=>{
           setalbumData(Response.data)
        })

    }
  return (
    <>
    <Layout />
    <div>
        <button onClick={albumHandler}>Album Data</button>
    </div>

    <table style={{margin:"50px", border:"2px solid green"}}>
        {
            albumData.map((e)=>{
                return(
                    
                  <tr>
                    <td style={{border:"2px solid red"}}>{e.id}</td>
                    <td style={{border:"2px solid red"}}>{e.title}</td>
                    
                  </tr>
                  
                )
            })
        }
    </table>
    </>
    
  )
}

export default Album