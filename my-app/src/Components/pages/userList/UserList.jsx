import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';


export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          
        },
        {field: 'action',
        headerName: "Action",
        width:150,
        renderCell: (params)=>{
            return(
                <>
                
                <button className="userListEdit">Edit</button>
                
                <DeleteIcon className="userListDelete"/>
                </>
            )
        }

        }
      ];
      
      const rows = [
        { id: 1, lastName: 'Beloso', firstName: 'Christian', age: 65 },
       
      ];
      
    return (
        <div className="userList">
            <h3>List Of Students</h3>
            <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}
