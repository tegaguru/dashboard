import React from 'react'
import folder from '../assets/folder.png'
import close from '../assets/close.png'
import openFolder from '../assets/open-folder.png'
import user from '../assets/user.jpg'
import readme from '../assets/readme.png'


function Activity (){
  return (
    <>
        <div className="activity__parent">
            <div className="activity__parent--container">
                <div className="source__heading">
                    <img src={openFolder} alt="" className='icon'/>
                    <img src={close} alt="" className='icon'/>
                </div>
                <div className="source__contents">
                    <h3>Source</h3>
                    <div className="source__details">
                        <p className='file-size'>1.2 MB •</p>
                        <p className='time-duration'>Yesterday •</p>
                        <p>1 item</p>
                    </div>
                </div>
                <div className="tags__contents">
                    <div className="top--tags">
                        <p>Tags</p>
                        <p><a href="">Edit</a></p>
                    </div>
                    <div className="bottom--tags">
                        <p className="tag--name">Work</p>
                        <p className="tag--name">Source</p>
                        <p className="tag--name">Font</p>
                    </div>
                    
                </div>
                <div className="sharing__contents">
                    <div className="top__sharing">
                        <p>Sharing</p>
                        <p>Manage</p>
                    </div>
                    <div className="sharing__profile">
                        <ul>
                            <li><a href=""><img src={user} alt="" /></a></li>
                            <li><a href=""><img src={user} alt="" /></a></li>
                            <li><a href=""><img src={user} alt="" /></a></li>
                            <li><a href=""><img src={user} alt="" /></a></li>
                            <li><a href="">+3</a></li>
                        </ul>
                    </div>
                    <div className="activity__navigation">
                        <ul>
                            <li><a href="">Activity</a></li>
                            <li><a href="">Comments</a></li>
                            <li><a href="">Versions</a></li>
                        </ul>
                    </div>
                    <div className="activity__panel">
                        <ul>
                            <li><a href=""><p>Yesterday</p><img src={user} alt="" /><span>You shared edit access to <span>Miko</span></span></a></li>
                            <li><a href=""><p>Yesterday</p><img src={user} alt="" /><span>You shared edit access to <span>Ashley</span></span></a></li>
                            <li><a href=""><p>April 1, 2022</p><img src={user} alt="" /><span>You changed Maszeh.glyph<span><img src={readme} className="icon" alt="" /></span></span></a></li>
                            <li><a href=""><p>Feb 21, 2022</p><img src={user} alt="" /><span>You added tag<span>Work</span><span>+2s</span></span></a></li>
                            <li><a href=""><p>Feb 16, 2022</p><img src={user} alt="" /><span>You changed edit to view acces to<span>Nolan</span></span></a></li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </>
    
  )
}

export default Activity;
