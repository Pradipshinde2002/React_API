import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

function Posts() {
    const [postData,setPostData]=useState([])
    function postHandler(){
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-09-10&sortBy=publishedAt&apiKey=4b07bcab1133493ebb924deb1e7c38c0").then((Response)=>{
           setPostData(Response.data)
        })

    }
  return (
    <>
    <Layout />
    <div>
        <button onClick={postHandler}>Posts Data</button>
    </div>

    <table style={{margin:"50px", border:"2px solid green"}}>
        {
            postData.map((e)=>{
                return(
                    
                  <tr>
                    <td style={{border:"2px solid red"}}>{e.author}</td>
                    <td style={{border:"2px solid red"}}>{e.title}</td>
                    <td style={{border:"2px solid red"}}>{e.source}</td>
                  </tr>
                  
                )
            })
        }
    </table>
    </>
    
  )
}

export default Posts