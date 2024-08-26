import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AirplayIcon from '@mui/icons-material/Airplay'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import StarIcon from '@mui/icons-material/Star'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type ComponentProps = {
  children: React.ReactNode
}

interface iListItemLinkProps {
  to: string
  icon: JSX.Element
  label: string
}

const ListItemLink: React.FC<iListItemLinkProps> = ({ to, icon, label }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
  }

  return (
    <ListItem key={label} disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
}

export const LateralMenu: React.FC<ComponentProps> = ({ children }) => {
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  function getIcon(label: string) {
    switch (label) {
      case 'Home':
        return <HomeIcon />
      case 'Panel Control':
        return <AirplayIcon />
      case 'Feed':
        return <DynamicFeedIcon />
      case 'TrustPilot':
        return <StarIcon />
      default:
        return <></>
    }
  }

  function getTo(label: string) {
    switch (label) {
      case 'Home':
        return '/home'
      case 'Panel Control':
        return '/panel-control'
      case 'Feed':
        return '/feed'
      case 'TrustPilot':
        return '/trustpilot'
      default:
        return '/home'
    }
  }

  return (
    <>
        <Drawer open variant="persistent">
          <Box width={mdDown ? '50px' : theme.spacing(28)} display="flex" alignItems={mdDown ? 'right' : "left"}>
            <Divider />
            <List>
              {['Home', 'Panel Control', 'Feed', 'TrustPilot'].map(
                (text, index) => (
                  <ListItemLink
                    label={text}
                    to={getTo(text)}
                    icon={getIcon(text)}
                  />
                )
              )}
            </List>
          </Box>
        </Drawer>
        
      <Box height="100vh" marginLeft={mdDown ? '50px' : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
