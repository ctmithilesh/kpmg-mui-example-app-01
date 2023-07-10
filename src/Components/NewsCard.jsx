import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BusinessNews } from '../APIs/businessNews'
import FloatingButton from './FloatingButton'

const NewsCard = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        
            const fetchBNews = async ()=>{

                    const result = await BusinessNews()
                    console.log(result)
                    setData(result)
            }
            fetchBNews()



    },[])
  return (
    <>\
    <Box 
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        sx={{m:2, p:2 }}  
    >
    {data != null && data.length ? data.map((item)=>(
             <Card sx={{ maxWidth: 345 }} key={item}>
             <CardMedia
               sx={{ height: 140 }}
               image={item.urlToImage}
               title={item.title}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {item.title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 Lizards are a widespread group of squamate reptiles, with over 6,000
                 species, ranging across all continents except Antarctica
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small">Share</Button>
               <Button size="small">Learn More</Button>
             </CardActions>
           </Card>


    )): <span> Loading... </span>}
   
         </Box>
         <FloatingButton />
    </>
   
  )
}

export default NewsCard
