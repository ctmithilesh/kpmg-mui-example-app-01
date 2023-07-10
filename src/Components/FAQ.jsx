import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import { faqContent } from '../Data/faqs'

const FAQ = () => {
  return (
    <Box>
        {faqContent.map((item)=>(
                <Accordion key={item}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>

        ))}
      
    </Box>
  )
}

export default FAQ
