import { useEffect, useState } from 'react';
import { alpha, Autocomplete, Box, Container, styled, TextField, Typography } from "@mui/material";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';

import NavBar from '../components/NavBar';
import StockData from '../components/StockData';

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: "#ffffff",
  '&:hover': {
    backgroundColor: "#fcfcfc",
  },
  display: "flex",
  paddingLeft: 8,
  paddingRight: 8,
}));

function StockSearch() {
  const [stockList, setStockList] = useState([]);
  const [stockData, setStockData] = useState();

  useEffect(() => {
    let isApiMounted = true;
    axios({ url: `${process.env.REACT_APP_API_URL}/stock/list` })
      .then(result => isApiMounted && setStockList(result.data))
      .catch(error => console.log(error))
    return () => isApiMounted = false
  }, [])

  const handleChange = (id) => {
    if (id) {
      axios({ url: `${process.env.REACT_APP_API_URL}/stock/stock-data/${id}` })
        .then(result => setStockData(result.data))
        .catch(error => console.log(error))
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        <Typography fontSize={55} align="center">The easiest way to buy<br />and sell stocks.</Typography>
        <Typography fontSize={24} align="center">Stock analysis and screening tools for<br />investors in india.</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", }}>
          {stockList.length > 0 &&
            <Search>
              <Box sx={{ my: "auto" }}>
                <SearchIcon />
              </Box>

              <Autocomplete disablePortal
                id="stock-list"
                options={stockList}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (<Typography {...props}>{option.name}</Typography>)}
                renderInput={(params) => <TextField style={{ minWidth: "40vw" }} sx={{
                  "& .MuiOutlinedInput-root": { "& > fieldset": { border: '0px solid green' } },
                  "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { border: '0px solid green' } }
                }} {...params} label="" />} onChange={(_event, value) => handleChange(value?.id)} />
            </Search>}
        </Box>
        {stockData && <StockData stockData={stockData} />}
      </Container>
    </>
  )
}

export default StockSearch