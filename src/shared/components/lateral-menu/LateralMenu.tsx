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
import InboxIcon from '@mui/icons-material/MoveToInbox'
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

const ListItemLink: React.FC<iListItemLinkProps> = ({
  to,
  icon,
  label,
}) => {
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
  const navigate = useNavigate()

  function getIcon(label: string) {
    switch (label) {
      case 'Home':
        return <InboxIcon />
      case 'Panel Control':
        return <InboxIcon />
      case 'Feed':
        return <InboxIcon />
      case 'TrustPilot':
        return <InboxIcon />
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

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Drawer open variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} display="flex">
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
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
