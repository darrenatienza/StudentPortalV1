import "./widgetSm.css"
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">What's The Event?</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                <img src="https://caro.doh.gov.ph/wp-content/uploads/2021/07/July-is-Nutrition-Month-7-2-2021.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nutrition</span>
                        <span className="widgetSmuserTitle"></span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon/>Open
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://thewholeu.uw.edu/wp-content/uploads/2016/06/intramurals-featured-image-3.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Intramurals</span>
                        <span className="widgetSmuserTitle"></span>
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityIcon/>Open

                    </button>
                </li>
            </ul>
            
        </div>
    )
}
