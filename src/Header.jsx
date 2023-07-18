import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
import { logout, selectUser } from './features/userSlice';
// import { SupervisorAccount } from '@mui/icons-material/SupervisorAccount';

function Header () {
  const user = useSelector(selectUser);
const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  }
  return (
    <div className='header'>
      <div className='header_left'>
        <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt=''/>
        <div className='header_search'>
            <SearchIcon/>
            <input type='text'/>
        </div>
      </div>
      <div className='header_right'>
          <HeaderOption Icon={Home} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
          <HeaderOption Icon={ChatIcon}title="Messaging"/>
          <HeaderOption Icon={NotificationsNoneIcon}title="Notification"/>
          <HeaderOption onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  )
}

export default Header;