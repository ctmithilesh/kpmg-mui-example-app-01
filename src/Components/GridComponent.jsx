import { Container, Grid } from '@mui/material'
import React from 'react'
import Card2 from './Card2'
import FloatingButton from './FloatingButton'



const GridComponent = () => {
  return (
    <>
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Card2 />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card2 />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card2 />
            </Grid>
        </Grid>
    </Container>
    <FloatingButton />
    </>
  )
}

export default GridComponent
