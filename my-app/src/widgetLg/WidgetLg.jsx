import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Today's Activity </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Subjects</th>
                    <th className="widgetLgTh">Type</th>
                    <th className="widgetLgTh">Deadline</th>
                    <th className="widgetLgTh">Action</th>
                </tr>
                <tr className="widgetLrTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNgLoTA81cwJXC659gEHeuEnAg00F8vcyIA&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mathematics</span>
                    </td>
                    <td className="widgetLgDate">Exercise</td>
                    <td className="widgetLgAmount">September</td>
                    <td className="widgetLgStatus"><Button type="Start"/></td>
                </tr>
                <tr className="widgetLrTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNgLoTA81cwJXC659gEHeuEnAg00F8vcyIA&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Science</span>
                    </td>
                    <td className="widgetLgDate">Exam</td>
                    <td className="widgetLgAmount">September</td>
                    <td className="widgetLgStatus"><Button type="Start"/></td>
                </tr>
                <tr className="widgetLrTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNgLoTA81cwJXC659gEHeuEnAg00F8vcyIA&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">English</span>
                    </td>
                    <td className="widgetLgDate">Assignment</td>
                    <td className="widgetLgAmount">September</td>
                    <td className="widgetLgStatus"><Button type="Open"/></td>
                    </tr>
            </table>
        </div>
    ) 
    }