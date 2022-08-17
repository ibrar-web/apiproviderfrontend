import {  GridToolbar } from '@mui/x-data-grid';

import { styled } from "@mui/material/styles";
const CustomToolbar = styled(GridToolbar)`
  & MuiDataGrid-toolbarContainer-body-MuiButtonBase-root-MuiButton-root {
    background-color: black;
    color:black;
  }
`;
export default CustomToolbar;