import { Image } from '@mui/icons-material'
import { Box } from '@mui/material'

export const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box display="flex" gap="20px" alignItems="end" position="relative" right="300px">
        <img src="./public/favicon.png" alt="logo" />
        <Box justifySelf="end">
          <Box fontSize="28px" fontWeight="700" fontFamily="-apple-system">
            Covid information monitoring center
          </Box>
          <Box fontSize="14px" fontWeight="500" fontFamily="-apple-system">
            System developed by João Vitor Medeiros
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
