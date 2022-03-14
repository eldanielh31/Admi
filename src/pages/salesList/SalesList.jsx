import "./salesList.css"
import { DataGrid } from "@material-ui/data-grid"

export default function SalesList(){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { _id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { _id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { _id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { _id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { _id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { _id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { _id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { _id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { _id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

  return (
    <div className="salesList">
        <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            getRowId={(row) => row._id}
            pageSize={5}
        />
    </div>
  )
}