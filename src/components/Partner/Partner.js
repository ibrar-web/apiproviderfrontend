

import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
import Container from '@mui/material/Container';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Item from 'antd/lib/list/Item';
import '../TableStyles/TableStyle.css'




const axios = require('axios').default;
// axios({
//   method: 'get',
//   url: 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001',
// }).then(function (response) {
//   console.log("This is the response : ", response.data);

// });



// const empList = [
//   { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', url: 'www.google.com', domain: 'https//:www.google.com', credit: 100, creditused: 20, profit: 50, currency: "USD" },
//   { id: 2, name: "Raj", email: 'raj@gmail.com', url: 'www.google.com', domain: 'https//:www.google.com', credit: 100, creditused: 20, profit: 50, currency: "USD" },
//   { id: 3, name: "David", email: 'david342@gmail.com', url: 'www.google.com', domain: 'https//:www.google.com', credit: 100, creditused: 20, profit: 50, currency: "USD" },
//   { id: 4, name: "Vikas", email: 'vikas75@gmail.com', url: 'www.google.com', domain: 'https//:www.google.com', credit: 100, creditused: 20, profit: 50, currency: "USD" },
// ];

export default function Games() {
  const [data, setData] = useState([])
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
      .then(res => {
        console.log("Your new array of modified objects here", res.data)
        setData(res.data);
      }).catch(err => { console.log('Data Error', err) })
  }, [])
  const empList = data.map((data, item) => {
    return [
      { "id": data.id },
      { "name": data.firstName },
      { "email": data.id },
      { "url": data.email },
      { "domain": data.email },
      { "credit": data.salary },
      { "creditused": data.contactNumber },
      { "currency": data.address },
      {"status": 1}
    ]
  })
  console.log('username is : ', empList.name);
  const defaultMaterialTheme = createTheme();

  const columns = [
    
    { title: "ID", field: "id", editable: false, cellStyle: {
      backgroundColor: 'black',
      color: '#f5b618',
    }, },
    { title: "Name", field: "name"},
    { title: "Email", field: "email" },
    { title: "URL", field: 'url' },
    { title: "Domain", field: "domain"},
    { title: "Credit", field: "credit"},
    { title: "Creditused", field: "creditused"},
    { title: "Currency", field: "currency"},
    {title: "Status", field:"status", lookup: { 1: 'Active', 0: 'Blocked'}}
  ]

  function HandleUpdate(updatedRow, index) {
    console.log('Rows updated :', updatedRow);
    console.log('index', index);

    axios({
      method: 'post',
      url: '/apiUrl',
      data: {
        email: updatedRow.email,
        // password: haspassword,
        username: updatedRow.name,
        domain: updatedRow.domain,
        status: updatedRow.status,
        // token: '',
        // refrer: '',
        credit: updatedRow.credit,
        creditused: updatedRow.creditused,
        profit: updatedRow.profit,
        // totaluser: 0,
        // bonusvalue: 0,
        currency: updatedRow.currency,
        // role: 'partner',
        // devicelogged: '',
        // socketid: ''

      }
    });
    //Remaining Code there
  }

  function HandleDelete(DeletedRow) {
    console.log('Rows Deleted :', DeletedRow);

    axios({
      method: 'post',
      url: '/apiUrl',
      data: {
        id : DeletedRow.id

      }
    });
    ////Remaining Code there
  }
  // function Option() {
  //   const [status, setstatus] = React.useState('');

  //   const handleChange = (event) => {
  //     setstatus(event.target.value);
  //   };

  //   return (
  //     <Box sx={{ minWidth: 120 }}>
  //       <FormControl fullWidth>
  //         <InputLabel sx={{color:'inherit'}} id="demo-simple-select-label">Status</InputLabel>
  //         <Select
  //           labelId="demo-simple-select-label"
  //           id="demo-simple-select"
  //           value={status}
  //           label="Status"
  //           onChange={handleChange}
  //           sx={{
  //             height: '40px',
  //             width: '110px'
  //           }}
  //         >
  //           <MenuItem sx={{color: 'green'}} value={1}>Active</MenuItem>
  //           <MenuItem sx={{color: 'red'}}value={0}>Blocked</MenuItem>
  //         </Select>
  //       </FormControl>
  //     </Box>
  //   )
  // }

  return (
    <>
      {/* <Navbar /> */}
      <Box component="main" sx={{ flexGrow: 1}}>
        <Container>
        
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              title="Partner Data"
              data={data}
              columns={columns}
              
              // actions={[
              //   {
              //     icon: () => <Option />,
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
                  HandleDelete(updatedRows[index])
                  setTimeout(() => {
                    setData(updatedRows)
                    resolve()
                  }, 2000)
                }),
                onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                  const index = oldRow.tableData.id;
                  const updatedRows = [...data]
                  updatedRows[index] = updatedRow
                  HandleUpdate(updatedRow, index)
                  setTimeout(() => {
                    setData(updatedRows)
                    resolve()
                  }, 2000)
                }),


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