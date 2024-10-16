import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function NewsAPI() {
  const [newsData, setnewsData] = useState([]);

  // const [news,setNews]=useState([])

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=everything&apiKey=75e3bee6d72e4225baf7f486e5d82af8"
      )
      .then((response) => {
        // console.log(response.data);
        setnewsData(response.data.articles);
      });
  }, []);
  return (
    <>
      <h2 className="text-center">New API</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {
        newsData.map((e,index) => {
          return (
            <div className="d-flex flex-column justify-content-around mb-3 w-25">
              <div key={index}>
              {
             
             e.urlToImage!==""&&(

             
              <img src={e.urlToImage} className="h-full w-100" />
         ) }
                  
                
              
                
              </div>
              <div>
                <p><strong>Title:</strong>{e.title}</p>
                <p><strong>Author:</strong>{e.author}</p>
                
              </div>
            </div>
          );
        })
        }
      </div>
     
    </>
  );
}

export default NewsAPI;
