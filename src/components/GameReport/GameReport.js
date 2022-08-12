

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import {
  randomCreatedDate
} from '@mui/x-data-grid-generator';


import Box from '@mui/material/Box';


// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

const rows = [
  { id: 1,dateCreated: randomCreatedDate(), col1: '32 Cards', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },
  { id: 2,dateCreated: randomCreatedDate(), col1: 'AndarBahar', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },
  { id: 3,dateCreated: randomCreatedDate(), col1: 'baccarat', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },
  { id: 4,dateCreated: randomCreatedDate(), col1: 'baibu', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },
  { id: 5,dateCreated: randomCreatedDate(), col1: 'Black jack', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },
  { id: 6,dateCreated: randomCreatedDate(), col1: 'CardMatka', col2: '648,500.00', col3: '--13,000.00', col4: '8,883.56', col5: '73', col6: '9', col7: '-2.00' },

];
const columns = [
  {
    field: 'dateCreated',
    headerName: 'Date',
    type: 'date',
    width: 180,
    editable: true,
  },
  { field: 'col1', headerName: 'Supplier', width: 150 },
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
          <h1>Hello this is the Game Report component</h1>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} />
          </div>
        </Container>
      </Box>
    </>

  )
}