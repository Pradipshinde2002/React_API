
import "./App.css";
import bootstrap from "bootstrap";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Posts from "./Posts";
import Layout from "./Layout";
import Comments from "./Comments"
import Album from "./Album";
import Photos from "./Photos";
import Todo from "./Todo";
import PostMethod from "./PostMethod";
import GetPost from "./GetPost";
import NewsAPI from "./news api/NewsAPI";
import PutDelete from "./PutDelete";
import A from "./HOC/A";
import B from "./HOC/B";

function App() {
  
  return (
    <>
      <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/album" element={<Album />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/postmethod" element={<PostMethod />} />
        <Route path="/getpost" element={<GetPost />} />
        <Route path="/newsapi" element={<NewsAPI />} />
        <Route path="/putdelete" element={<PutDelete />} />
        {/* <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} /> */}
      </Routes>
      </BrowserRouter>
        {/* <A name="A Component"></A>
        <B name="B Component"></B> */}
      </div>
    </>
  );
}

export default App;
