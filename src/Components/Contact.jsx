import React from 'react'
import { EmailOutlined, Phone } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import FloatingButton from './FloatingButton';
const Contact = () => {
  return (
    <div>
      <Box
        display="flex" 
        flexDirection="row"
        justifyContent="space-around"
        sx={{m:2, p:2, backgroundColor:`lightGreen`}}
      >
        <Button>
                <EmailOutlined />
        </Button>
        <Button>
                <Phone />
        </Button>
      </Box>
      <FloatingButton />
    </div>
  )
}

export default Contact
