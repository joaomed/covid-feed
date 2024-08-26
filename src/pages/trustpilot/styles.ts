import { Box, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

export const ContainerCard = styled(Box)({
  height: '180px',
  width: '320px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#010032',
  color: "white",
  fontWeight: 500,
  position:"relative",
  bottom:"15px"

})

export const StarHeader = styled(StarIcon)({
  color: '#00B67A',
  width: '24px'
})

export const HeaderCard = styled(Box)({
  display: 'flex',
  fontSize: '16px',
  gap:"5px"

})

export const BodyCard = styled(Box)({
  fontSize: '14px',
  span: {
    color: "#00B67A"
  }
})

export const FooterCard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '14px',
  a: {
    color: '#00B67A'
  }
})

export const ArrowFooter = styled(ArrowForwardIcon)({
  color: '#00B67A',
  width: '18px'
})
