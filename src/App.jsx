import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase'; 
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
        // is loggged in
        dispatch(login({
           email:userAuth.email,
           uid:userAuth.uid,
           displayName:userAuth.displayName,
           photoUrl:userAuth.photoURL
        }));
      }
      else{
        //is logged out
        dispatch(logout());
      }
    })
  },[])
  return (
      
      <div className='app'>
          <Header/>
          {!user ? <Login/> : 
          <div className='app__body'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
          }
         
      </div>
    
  )
}

export default App
