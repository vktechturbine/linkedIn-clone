import React from 'react'
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
                <span className='sidebar__hash'><GroupsIcon/></span>
                <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>

            <div className='sidebar_top'>
                <img src="https://images.unsplash.com/photo-1621146027714-e8921770f8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                <Avatar className='sidebar_avatar' src={user.photoUrl} />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                <h4>Student at k j college of engineering {'\n'} and management research</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <div className='sidebar_stat_content'>
                        <p>Connections</p>
                        <p className='sidebar_stat_p2'>Grow Your Network</p>
                    </div>

                    <p className='sidebar_statNumber'>19</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Invitations</p>
                    <p className='sidebar_statNumber'>9</p>
                </div>
            </div>
            <div className='sidebar_premium'>
                <h4>Access exclusive tools & insights</h4>
                <div className='sidebar_premium_header'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                        <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                    </svg>
                    <h5>Try Premium for free</h5>
                </div>
            </div>
            <div className='sidebar_items'>
                <BookmarkIcon style={{ color: 'grey' ,width:'20px',height:'20px'}} />
                <h5>My items</h5>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("FUEL Fellows & Alumni Students 20")}
                {recentItem("FUEL Fellows & Alumni Students 20")}
            </div>
        </div>
    )
}

export default Sidebar;