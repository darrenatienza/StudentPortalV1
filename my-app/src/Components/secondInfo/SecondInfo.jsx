import "./secondInfo.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SecondInfo() {
    const data = [
        {
          name: 'Recitation',
          "Active User": 4000,
          "Students": 500,
          "Quizes": 2400,
          amt: 2400,
        },
        {
          name: 'Test',
          "Active User": 4000,
          "Students": 3000,
          "Quizes": 1398,
          amt: 2210,
        },
        {
          name: 'Quiz',
          "Active User": 4000,
          "Students": 2000,
          "Quizes": 9800,
          amt: 2290,
        },
        {
          name: 'Exam',
          "Active User": 4000,
          "Students": 2780,
          "Quizes": 3908,
          amt: 2000,
        },
        {
          name: 'Existing Class',
          "Active User": 4000,
          "Students": 1890,
          "Quizes": 4800,
          amt: 2181,
        },
        
      ];
    return (
        <div className="chart">
            <h3 className="chartTitle">Student Progress</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                 <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    
                <CartesianGrid strokeDasharray= "3 3"/>
                 <XAxis dataKey="name" stroke="#5550bd"/>
                 <YAxis/>
                 <YAxis/>
                 <Tooltip/>
                 <Legend/>
                 <Bar type="monotome" dataKey="Active User" stroke="#5550bd"/>
                 <Bar dataKey="Students" fill="#8884d8"/>
                 <Bar dataKey="Quizes" fill="#82ca9d"/>
                 </BarChart>
                </ResponsiveContainer>
        </div>
    )
}

