

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import {
  randomCreatedDate
} from '@mui/x-data-grid-generator';


import Box from '@mui/material/Box';



const rows= [
    { id: 1,dateCreated: randomCreatedDate(), col1: 'bazymyr0000ridoy',col2:'0000ridoy', col3: '648,500.00', col4: '-13,000.00', col5: '8,883.56', col6: '73', col7: '1', col8: '-2.00' },
    { id: 2,dateCreated: randomCreatedDate(), col1: 'bazymyr0000farhan',col2:'0000farhan',col3: '648,500.00', col4: '-13,000.00', col5: '8,883.56', col6: '73', col7: '1', col8: '-2.00' },
    { id: 3,dateCreated: randomCreatedDate(), col1: 'bazymyr0000lilix',col2:'0000lilix',col3: '648,500.00', col4: '-13,000.00', col5: '8,883.56', col6: '73', col7: '1', col8: '-2.00' },
    { id: 4,dateCreated: randomCreatedDate(), col1: 'bazymyr0000abram',col2:'0000abram',col3: '648,500.00', col4: '-13,000.00', col5: '8,883.56', col6: '73', col7: '1', col8: '-2.00' },
    { id: 5,dateCreated: randomCreatedDate(), col1: 'bazymyr0000katen',col2:'0000katen',col3: '648,500.00', col4: '-13,000.00', col5: '8,883.56', col6: '73', col7: '1', col8: '-2.00' },

  ];
    const columns = [
      {
        field: 'dateCreated',
        headerName: 'Date',
        type: 'date',
        width: 150,
        editable: true,
        headerClassName: 'super-app-theme--header',
        cellClassName: 'super-app-theme--header',
      },
    { field: 'col1', headerName: 'User Name', width: 120, headerClassName: 'super-app-theme--header' },
    { field: 'col2', headerName: 'User Id', width: 130, headerClassName: 'super-app-theme--header' },
    { field: 'col3', headerName: 'Turnover Points', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col4', headerName: 'GGR Points', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col5', headerName: 'Average Bet', width: 140, headerClassName: 'super-app-theme--header' },
    { field: 'col6', headerName: 'Bet Count', width: 110, headerClassName: 'super-app-theme--header' },
    { field: 'col7', headerName: 'Active Users', width: 120, headerClassName: 'super-app-theme--header' },
    { field: 'col8', headerName: 'Margin in %', width: 100, headerClassName: 'super-app-theme--header' },
  ];

export default function BasicExampleDataGrid() {
return (
    <>
        {/* <Navbar /> */}
        <Box component="main" sx={{ flexGrow: 1}}>
            <Container>
                <h1>Hello this is the Player Report component</h1>
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