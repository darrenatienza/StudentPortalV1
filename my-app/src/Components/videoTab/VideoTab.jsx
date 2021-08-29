import "./videTab.css"
import ReactPlayer from "react-player"
export default function VideoTab() {
    return (
        
        <div className="VideoTab">
            
            <ReactPlayer className="videoResponsive"
            url="https://www.youtube.com/watch?v=1k5cFIUWxpU"
            />
        </div>
    )
}
