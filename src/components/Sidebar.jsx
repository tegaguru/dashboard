import folder from '../assets/folder.png'
import recent from '../assets/recent.png'
import favorites from '../assets/favorites.png'
import share from '../assets/share.png'
import tags from '../assets/tag.png'
import setting from '../assets/setting.png'
import recycle from '../assets/recycle-bin.png';
import storage from '../assets/storage.png'

function Sidebar (){
    return (
        <>
            <div className="sidebar__parent">
                <div className="sidebar__parent--container">
                    <ul className="sidebar__top--content">
                        <li><a href=""><img src={folder} className="icon" alt="" /> <span>All Files</span> </a></li>
                        <li><a href=""><img src={recent} className="icon" alt="" /> <span>Recent</span> </a></li>
                        <li><a href=""><img src={favorites} className="icon" alt="" /> <span>Favorites</span> </a></li> 
                        <li><a href=""><img src={share} className="icon" alt="" /> <span>Shared</span> </a></li> 
                        <li><a href=""><img src={tags} className="icon" alt="" /><span>Tags</span> </a></li>    
                    </ul> 
                    <ul className="sidebar__bottom--content">
                        <li><a href=""><img src={setting} className="icon" alt="" />Settings</a></li> 
                        <li><a href=""><img src={recycle} className="icon" alt="" />Deleted Files</a></li> 
                        <li><a href=""><img src={storage} className="icon" alt="" />Storage</a></li> 
                    </ul> 
                </div>
            </div>
        </>
    )
}

export default Sidebar;