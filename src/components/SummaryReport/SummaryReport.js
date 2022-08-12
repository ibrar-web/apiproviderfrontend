

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
    },
    { field: 'col1', headerName: 'Operator & Sites', width: 150 },
    { field: 'col2', headerName: 'Turnover Points', width: 150 },
    { field: 'col3', headerName: 'GGR Points', width: 150 },
    { field: 'col4', headerName: 'Average Bet', width: 150 },
    { field: 'col5', headerName: 'Bet Count', width: 150 },
    { field: 'col6', headerName: 'Active Users', width: 150 },
    { field: 'col7', headerName: 'Margin in %', width: 150 },
  ];

export default function BasicExampleDataGrid() {

return (
    <>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, ml: 20 }}>
            <Container>
                <h1>Hello this is the Summary Report component</h1>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid  rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} />
                </div>
            </Container>
        </Box>
    </>

)
}