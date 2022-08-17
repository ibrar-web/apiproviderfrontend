

import React  from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import {
  randomCreatedDate
} from '@mui/x-data-grid-generator';


import Box from '@mui/material/Box';




const rows= [
    { id: 1,dateCreated: randomCreatedDate(), col1: 'betex365', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },
    { id: 2,dateCreated: randomCreatedDate(), col1: 'DataGridPro',col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },

  ];
  const columns = [
    {
      field: 'dateCreated',
      headerName: 'Date',
      type: 'date',
      width: 180,
      editable: true,
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--header',
    },
    { field: 'col1', headerName: 'Operator & Sites', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col2', headerName: 'Turnover Points', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col3', headerName: 'GGR Points', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col4', headerName: 'Average Bet', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col5', headerName: 'Bet Count', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col6', headerName: 'Active Users', width: 130, headerClassName: 'super-app-theme--header' },
    { field: 'col7', headerName: 'Margin in %', width: 140, headerClassName: 'super-app-theme--header' },
  ];

export default function BasicExampleDataGrid() {

return (
    <>
        {/* <Navbar /> */}
        <Box component="main" sx={{ flexGrow: 1}}>
            <Container>
                <h1>Hello this is the Supplier Report component</h1>
                <div style={{ height: 600, width: '100%' }}>
                <Box sx={{
              height: '100%',
              width: '100%',
              '& .super-app-theme--header': {
                backgroundColor: 'black',
                color: '#f5b618'
              },
            }}>

              <DataGrid

                rows={rows}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                />
            </Box>
                </div>
            </Container>
        </Box>
    </>

)
}