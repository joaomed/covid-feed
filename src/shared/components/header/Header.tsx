import { Box } from '@mui/material'
import { Logo } from '../../../assets/Logo'

export const Header = () => {
  return (
    <Box height="120px" bgcolor="#63B3ED">
      <Box paddingLeft='30px'>
        <Logo />
      </Box>
    </Box>
  )
}
