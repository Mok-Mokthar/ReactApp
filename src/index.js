import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home/Home';
import Comments from './Components/Comments/Comments';
import Users from './Components/Users/Users';
import User from './Components/User/User';
import NavBar from './Components/NavBar/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/comments" element={<Comments />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
