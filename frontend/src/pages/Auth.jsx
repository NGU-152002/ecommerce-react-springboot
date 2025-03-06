import React from 'react';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Foooter from '../components/Foooter';
function Auth() {
  const [auth,setAuth] = useState(true);
    return (
    <>
    
    {
        auth
        ?
        <Login auth={auth} setAuth={setAuth}/>
        :
        <Register auth={auth} setAuth={setAuth}/>
    }
    <Foooter />
    </>
  )
}

export default Auth