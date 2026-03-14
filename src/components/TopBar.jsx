import React from 'react'
import folder from '../assets/folder.png'
import activity from '../assets/activity.png'
import calendar from '../assets/calendar.png'
import contact from '../assets/contact.png';
import notification from '../assets/notification.png'
import user from '../assets/user.jpg'


function TopBar (){
  return (
    <>
      <div className="topNavigation__container">
          <div className="logo__container">
            <p>Minecloud</p>
          </div>
          <div className="top__nav">
            <ul>
              <li><a href=""><img src={folder} className="icon"alt="" /><span>Files</span></a></li>
              <li><a href=""><img src={activity} className="icon"alt="" /> <span>Activity</span> </a></li>
              <li><a href=""><img src={calendar} className="icon"alt="" /> <span>Calendar</span> </a></li>
              <li><a href=""><img src={contact} className="icon"alt="" /> <span>Contact</span> </a></li>

            </ul>
          </div>
          <div className="profile__container">
            <ul>
              <li><input type="text" placeholder='Search anything...' /></li>
              <li><img src={notification} className="notification" alt="" /></li>
              <li><img src={user} className="profilePic" alt="" /></li>
            </ul>
          </div>
      </div>
    </>
    
  )
}
export default TopBar
