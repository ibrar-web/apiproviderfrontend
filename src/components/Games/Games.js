

import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import '../TableStyles/TableStyle.css'


const empList = [
    { id: 1, name: "Temple Run", key: 9876543210, status: 1 },
    { id: 2, name: "Subway Surfer", key: 9812345678, status: 0 },
    { id: 3, name: "Brother in arms", key: 7896536289, status: 0 },
    { id: 4, name: "Modren Combat", key: 9087654321, status: 1 },
  ]
  

export default function Games() {
    const defaultMaterialTheme = createTheme();
    const [data, setData] = useState(empList)
    const [selectedRow, setSelectedRow] = useState(null);
    const columns = [
      { title: "ID", field: "id", editable: false, cellStyle: {
        backgroundColor: 'black',
        color: '#f5b618',
      },  },
      { title: "Name", field: "name" },
      { title: "Key", field: 'key', },
      { title: "Status", field: "status", lookup: { 1: 'Active', 0: 'Blocked'}}
    ]
    // function Option() {
    //   const [status, setstatus] = React.useState('');
  
    //   const handleChange = (event) => {
    //     setstatus(event.target.value);
    //   };
    
    //   return (
    //     <Box sx={{ minWidth: 120 }}>
    //     <FormControl fullWidth>
    //       <InputLabel id="demo-simple-select-label">Status</InputLabel>
    //       <Select
    //         labelId="demo-simple-select-label"
    //         id="demo-simple-select"
    //         value={status}
    //         label="Status"
    //         onChange={handleChange}
    //         sx={{
    //           height:'40px',
    //           width:'110px'
    //         }}
    //       >
    //         <MenuItem value={1}>Active</MenuItem>
    //         <MenuItem value={0}>Blocked</MenuItem>
    //       </Select>
    //     </FormControl>
    //   </Box>
    //   )
    // }
  return (
    <>
      {/* <Navbar /> */}
      <Box component="main" sx={{ flexGrow: 1}}>
        <Container>
          <h1>Hello this is the Games component</h1>
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Game Data"
        data={data}
        columns={columns}
        // actions={[
        //   {
        //     icon: () => <Option/>,
        //     tooltip: "",
        //     onClick: () => console.log('clicked')
        //   }
        // ]}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          // filtering: true,
          actionsColumnIndex: -1, addRowPosition: "first",
          cellStyle: { border: '1px solid grey' },
          headerStyle: {
            backgroundColor: 'black',
            color: '#f5b618',
          },
          searchFieldStyle:{
            backgroundColor:'black',
            color:'#f5b618',
            height:'40px',
            outline:'none'
          },         
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : 'white',
            fontSize:'10px',
          })
        }}
      />
      </ThemeProvider>
        </Container>
      </Box>
    </>

  )
}