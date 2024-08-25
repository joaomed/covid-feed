import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

type ComponentProps = {
  children: React.ReactNode
}

export const LateralMenu: React.FC<ComponentProps> = ({ children }) => {
  const theme = useTheme()

  return (
    <>
      <Drawer open variant="permanent">
        <Box width={theme.spacing(28)} display="flex">
 
          <Divider/>
          <List>
        {['Home', 'Panel Control', 'Feed', 'TrustPilot'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
          
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
