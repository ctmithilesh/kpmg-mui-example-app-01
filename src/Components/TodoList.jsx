import { DraftsOutlined, InboxOutlined } from '@mui/icons-material'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { countries } from '../Data/countries'

const TodoList = () => {


  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            {countries.map((item)=>(
                    <ListItem disablePadding key={item}>
                    <ListItemButton>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
            ))}
          
        </List>
      <Divider />
    </Box>
  )
}

export default TodoList
