import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft"><span className="logo">
                    Students Portal
                    </span></div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                          <NotificationsNoneIcon/>
                          <span className="topIconBadge">
                              2
                          </span>
                        </div> 
                        <div className="topbarIcons">
                          <LanguageIcon/>
                          <span className="topIconBadge">
                              2
                          </span>
                        </div> 
                        <img src="https://i.ytimg.com/vi/gS8NnDs_MmU/hqdefault.jpg" alt="" className="topAvatar" />
 
                    </div>
            </div>
        </div>
    )
}