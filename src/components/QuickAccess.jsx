import fourSquare from '../assets/four-square.png';
import plus from '../assets/plus.png';
import openFolder from '../assets/open-folder.png'
import user from '../assets/user.jpg'
import document from '../assets/document.png'
import readme from '../assets/readme.png'
import html from '../assets/html.png'


function QuickAccess () {
    return (
        <>
        <main>
            <div className="quickAccess__parent">
            <div className="quickAccess__container">
                <div className="quickAccess--heading">
                    <p>Quick Access</p>
                </div>
                <div className="quickAccess--list">
                    <div className="quickAccess--list-item">
                        <div className="icon"><img src={openFolder} className="icon"alt="" /></div>
                        <div className="heading">Studio Work</div>
                        <div className="details">2.3gb • 23 Items</div>
                    </div>
                    <div className="quickAccess--list-item">
                        <div className="icon"><img src={openFolder} className="icon"alt="" /></div>
                        <div className="heading">Source</div>
                        <div className="details">1.2 MB • 1 Item</div>
                    </div>
                    <div className="quickAccess--list-item">
                        <div className="icon"><img src={openFolder} className="icon"alt="" /></div>
                        <div className="heading">Brand Assets</div>
                        <div className="details">241 MB • 8 Items</div>
                    </div>
                    <div className="quickAccess--list-item">
                        <div className="icon"><img src={openFolder} className="icon"alt="" /></div>
                        <div className="heading">Great Studios Pitch</div>
                        <div className="details">12.3 MB • pptx</div>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="quickAccess__secondary">
                <div className="quickAccess__secondary--container">
                    <div className="heading--container">
                        <ul className="heading--top">
                            <li><a href="">Home <span> {'>'} </span> </a></li>
                            <li><a href="">Concept Font  <span>{'>'}</span></a></li>
                            <li><a href="" className="username">Guru</a></li>
                            <li><a href=""><img src={fourSquare} className="fourSquare" alt="" /></a></li>
                            <li><a href="" className="button"><img className="plus"src={plus} alt="" />Add New</a></li>
                        </ul>
                        <ul className='heading--bottom'>
                            <li>Name <span>{'>'}</span></li>
                            <li>Sharing</li>
                            <li>Size <span>{'>'}</span></li>
                            <li>Modified <span>{'>'}</span></li>
                        </ul>

                    </div>
                    <div className="body--container">
                        <div className="files">
                            <a href="">
                                <ul>
                                    <li><a href=""><img src={openFolder} className="icon" alt="" />Docs</a></li>
                                    <li><a href="" >Public</a></li>
                                    <li><a href="" >4.5 MB</a></li>
                                    <li>Apr 10 2022</li>
                                    <li><a href="">...</a></li>
                                </ul>
                            </a>
                            <a href="">
                                <ul>
                                    <li><a href=""><img src={openFolder} className="icon" alt="" />Fonts</a></li>
                                    <li><a href="" >Public</a></li>
                                    <li><a href="" >4.5 MB</a></li>
                                    <li>Apr 10 2022</li>
                                    <li><a href="">...</a></li>

                                </ul>
                            </a>                            
                            <a href="">
                                <ul>
                                    <li><a href=""><img src={openFolder} className="icon" alt="" />Source</a></li>
                                    <li><a href="" ><img src={user} className="user" alt="" /><img src={user} className="user" alt="" /><img src={user} className="user" alt="" /><img src={user} className="user" alt="" /> <span>+4</span></a></li>
                                    <li><a href="" >1.2 MB</a></li>
                                    <li>Yesterday</li>
                                    <li><a href="">...</a></li>

                                </ul>
                            </a>
                            
                            <a href="">
                                <ul>
                                    <li><a href=""><img src={openFolder} className="icon" alt="" />Example</a></li>
                                    <li><a href="" ><img src={user} className="user" alt="" /><img src={user} className="user" alt="" /><img src={user} className="user" alt="" /><img src={user} className="user" alt="" /></a></li>
                                    <li><a href="" >12.2 MB</a></li>
                                    <li>Yesterday</li>
                                    <li><a href="">...</a></li>

                                </ul> 
                            </a>
                            
                            <a href="">
                                <ul>
                                    <li><a href=""><img src={document} className="icon" alt="" />OFL.txt</a></li>
                                    <li><a href="" >Public</a></li>
                                    <li><a href="" >4 KB</a></li>
                                    <li>Oct 12 2021</li>
                                    <li><a href="">...</a></li>

                                </ul>
                            </a>
                            
                            <a href="">
                                <ul>
                                    <li><a href=""><img src={readme} className="icon" alt="" />OFL.txt</a></li>
                                    <li><a href="" >Public</a></li>
                                    <li><a href="" >2 KB</a></li>
                                    <li>Oct 12 2021</li>
                                    <li><a href="">...</a></li>

                                </ul>
                            </a>

                            <a href="">
                                <ul>
                                    <li><a href=""><img src={html} className="icon" alt="" />OFL.txt</a></li>
                                    <li><a href="" >Public</a></li>
                                    <li><a href="" >14 KB</a></li>
                                    <li>Oct 12 2021</li>
                                    <li><a href="">...</a></li>

                                </ul>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
        

        </>
    )
} 

export default QuickAccess;