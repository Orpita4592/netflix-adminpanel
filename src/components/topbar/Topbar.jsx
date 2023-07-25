import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import React from 'react'
import "./topbar.css"

function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>adminpanel</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Language />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Settings />
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='avatar' />
            </div>
        </div>
    </div>
  )
}

export default Topbar;