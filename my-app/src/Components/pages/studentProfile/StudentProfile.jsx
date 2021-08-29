import './studentProfile.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';

export default function StudentProfile() {
    return (
        <div className="users">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
        <div className="useShow">
        <div className="userShowTop"></div>
        <img src="https://m.media-amazon.com/images/I/61VwEGY2HtL._AC_SL1500_.jpg"
        alt=""
        className="userShowImg"
        />
        <div className="userShowTopTitle">
        <span className="userShowUsername">Christian Beloso</span>
        <span className="userShowUserTitle">Group Member</span>
        </div>
        
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentityIcon className="userShowIcon"/> 
            <span className="userShowTitle">christianbeloso</span>
            </div>
            <div className="userShowInfo">
            <CalendarTodayIcon className="userShowIcon"/> 
            <span className="userShowTitle">12312412</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <MailOutlineIcon className="userShowIcon"/> 
            <span className="userShowTitle">awdsda@gmail.com</span>
            </div>
            <div className="userShowInfo">
            <LocationOnIcon className="userShowIcon"/> 
            <span className="userShowTitle">STI</span>
            </div>
    
        </div>
        
            <div className="useUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="christianbeloso" 
                        className="userUpdaetInput"/>
                    </div>
                    <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="christianbeloso" 
                        className="userUpdaetInput"/>
                    </div>
                </div>
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="christianbeloso" 
                        className="userUpdaetInput"/>
                    </div>
                </div>
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="christianbeloso" 
                        className="userUpdaetInput"/>
                    </div>
                </div>
                
                </div>
                <div className="userUpdateRight"></div>
                <div className="userUpdateUpload">
                    <img className="userUpdateImg" src="https://m.media-amazon.com/images/I/61VwEGY2HtL._AC_SL1500_.jpg" alt="" />
                   <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                    <input type="file" id="file" style={{ display:"none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
            
            </form>
        </div>
        </div>
        </div>
        

        
    )
}
