import "./newUser.css"
import Button from '@material-ui/core/Button';

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserForm">
                    <div className="newUserItem">
                        <label >UsernName</label>
                        <input type="text" placeholder="Christian Beloso" className="" />
                    </div>
                    <div className="newUserItem">
                        <label >FullName</label>
                        <input type="text" placeholder="Christian Beloso" className="" />
                    </div>
                    <div className="newUserItem">
                        <label >Email</label>
                        <input type="email" placeholder="asdhbqwkj@gmail.com" className="" />
                    </div>
                    <div className="newUserItem">
                        <label >Password</label>
                        <input type="password" placeholder="Christian Beloso" className="" />
                    </div>
                    <div className="newUserItem">
                        <label >Phone</label>
                        <input type="text" placeholder="19038019238901" className="" />
                    </div>
                    <div className="newUserItem">
                        <label >Address</label>
                        <input type="text" placeholder="STI" className="" />
                    </div>
                    <div className="newUserItem">
                        <label >Gender</label>
                        <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"  />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"  />
                        <label for="female">Female</label> 
                        </div>
                    </div>
                    <div className="newUserItem">
                    <label >Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    </div>
                    

                </div>
                <Button className="newUserButton" variant="outlined" color="primary">
                        Create 
                        </Button>
            </form>
        </div>
    )
}
