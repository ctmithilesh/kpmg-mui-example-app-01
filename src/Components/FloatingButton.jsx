import { AbcOutlined, ContactPageOutlined, ContentCopy, WorkHistory } from '@mui/icons-material';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';


const actions = [
    { icon: <AbcOutlined />, name: 'About', to:'/about'  },
    { icon: <ContactPageOutlined />, name: 'Contact', to:'/contact' },
    { icon: <WorkHistory />, name: 'JobRegistration',  to:'/job-registration' },
    { icon: <ContentCopy />, name: 'News',  to:'/business-news' },
  ];
  
const FloatingButton = () => {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            component={Link}
            to={action.to}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default FloatingButton
