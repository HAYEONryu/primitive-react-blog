import React from 'react';
import {Route} from 'react-router-dom';
import Postpage from './pages/Postpage';
import Write from './pages/Write';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import PostList from './pages/PostList';

const App = ()=>{
  return(
    <>
      <Route component = {PostList} path={["/@:username","/"]} exact />
      <Route component = {LoginPage} path="/login" />
      <Route component = {Register} path="/register" />
      <Route component = {Write} path="/write" />
      <Route component = {Postpage} path="/@:username/:postId" />
    </>
    );
};
export default App;
