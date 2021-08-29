import { Button, Paper } from "@material-ui/core"
import "./featuredInfo.css"

export default function FeaturedInfo() {
    return (
        <Paper variant="outlined">
        <div className="featured">
            <div className="featuredItem">
                
                <span className="Sales"><h3>Hello Melodee!</h3></span> 
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Your Today's Plan </span>
                    <span className="featuredMoneyRate">
                    </span>
                </div>
                <span className="featuredSub">You Login As Administrator</span>
           </div>
            <img src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/Doki-Doki-Literature-Club-monika.jpg" alt="" className="profileStu" />
             <Button variant="contained" color="secondary" className="Buttonss">
                Logout
            </Button>
            

        </div>
        </Paper>
        
    )
    
}
