import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption ({avatar,Icon,title,onClick}){
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl} />}
        <h3 className='headerOption_title'>{avatar ? user?.email[0] :title }</h3>
    </div>
  )
}

export default HeaderOption;