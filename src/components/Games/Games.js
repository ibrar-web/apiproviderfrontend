

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const empList = [
    { id: 1, name: "Temple Run", key: 9876543210, status: 'Active' },
    { id: 2, name: "Subway Surfer", key: 9812345678, status: 'Active' },
    { id: 3, name: "Brother in arms", key: 7896536289, status: 'Active' },
    { id: 4, name: "Modren Combat", key: 9087654321, status: 'Active' },
  ]
  

export default function Games() {
    const defaultMaterialTheme = createTheme();
    const [data, setData] = useState(empList)
    const columns = [
      { title: "ID", field: "id", editable: false },
      { title: "Name", field: "name" },
      { title: "Key", field: 'key', },
      { title: "Status", field: "status", }
    ]
    function Option() {
      const [status, setstatus] = React.useState('');
  
      const handleChange = (event) => {
        setstatus(event.target.value);
      };
    
      return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleChange}
            sx={{
              height:'40px',
              width:'110px'
            }}
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>Blocked</MenuItem>
          </Select>
        </FormControl>
      </Box>
      )
    }
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, ml: 20 }}>
        <Container>
          <h1>Hello this is the Games component</h1>
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Game Data"
        data={data}
        columns={columns}
        actions={[
          {
            icon: () => <Option/>,
            tooltip: "",
            onClick: () => console.log('clicked')
          }
        ]}
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
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
      </ThemeProvider>
        </Container>
      </Box>
    </>

  )
}