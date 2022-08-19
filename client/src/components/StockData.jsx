import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'

function StockData({ stockData }) {
  return (
    <>
      <Card elevation={0} className="main__card">
        <CardHeader title={stockData.name} sx={{ pl: 6 }} />
        <CardContent>
          <Box className='card__background'>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }} >
                  <Typography component="span">Market Cap</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }}>
                  <Typography component="span">Divident Equity</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }}>
                  <Typography component="span">Debt Equity</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }} className="card__grid__background">
                  <Typography component="span">Current Price</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }} className="card__grid__background">
                  <Typography component="span">ROCE</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }} className="card__grid__background">
                  <Typography component="span">EPS</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }}>
                  <Typography component="span">Stock {"P/E"}</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }}>
                  <Typography component="span">ROE</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }}>
                  <Typography component="span">Reserves</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 2 }} className="card__grid__background">
                  <Typography component="span">Debt</Typography>
                  <Typography component="span" className="card__content__value"> ₹{stockData.mkt_cap}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default StockData