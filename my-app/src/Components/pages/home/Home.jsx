import FeaturedInfo from '../../../featuredInfo/FeaturedInfo'
import WidgetLg from '../../../widgetLg/WidgetLg'
import WidgetSm from '../../../widgetSm/WidgetSm'
import SecondInfo from '../../secondInfo/SecondInfo'
import VideoTab from '../../videoTab/VideoTab'
import './home.css'

export default function home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <SecondInfo/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
            <VideoTab/>
        </div>
    )
}
