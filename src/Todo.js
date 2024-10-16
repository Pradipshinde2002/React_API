import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

function Todo() {
    const [todoData,settodoData]=useState([])
    function todoHandler(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then((Response)=>{
           settodoData(Response.data)
           console.log(Response.data)
        })

    }
  return (
    <>
    <Layout />
    <div>
        <button onClick={todoHandler}>Todo Data</button>
    </div>

    <table style={{margin:"50px", border:"2px solid green"}}>
        {
            todoData.map((e)=>{
                return(
                    
                  <tr>
                    <td style={{border:"2px solid red"}}>{e.id}</td>
                    <td style={{border:"2px solid red"}}>{e.title}</td>
                    <td style={{border:"2px solid red"}}>{e.completed}</td>
                  </tr>
                  
                )
            })
        }
    </table>
    </>
    
  )
}

export default Todo