import { ListItemIcon } from "@material-ui/core"
import React from 'react';
import "./sidebar.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EventIcon from '@material-ui/icons/Event';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LanguageIcon from '@material-ui/icons/Language';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpIcon from '@material-ui/icons/Help';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><HomeIcon/>Home</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem active">
                            <Link className= "Linkcon" to="/" style={{textDecoration:"none"}}>
                        <DashboardIcon/> Home 
                        </Link>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><ReceiptIcon/>Modules</h3>
                    <ul className="sidebarlist">
                        <Link className= "Linkcon" to="/Users" style={{textDecoration:"none"}}>
                        <li className="sidebarListItem">
                            Users
                        </li>
                        </Link>
                       
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><EventIcon/>Events</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            Events
                        </li>
                        <li className="sidebarListItem">
                        </li>
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><AssessmentIcon/>Student Progress</h3>
                    <ul className="sidebarlist">  
                    <Link to="/Users">
                        
                    </Link>
                        <li className="sidebarListItem">
                            Student's
                        </li>
                        <li className="sidebarListItem">
                            <Link className="Linkcon" to="/studentprofile" style={{textDecoration:"none"}}>
                            Student's Profile
                            </Link>
                        </li>
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><LanguageIcon/>iLearn</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            Handouts
                        </li>
                        <li className="sidebarListItem">
                            Videos
                        </li>
                    
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><FindInPageIcon/>Activities</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            Assignments
                        </li>
                        <li className="sidebarListItem">
                            Exercises
                        </li>
                        <li className="sidebarListItem">
                            Class
                        </li>
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><HelpIcon/>Online Help</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            Help
                        </li>
                       
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebartitle"><ContactSupportIcon/>Ask Question</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            Asks
                        </li>
                        
                    </ul>
                </div> 
            </div>
            
        </div>
    )
}
