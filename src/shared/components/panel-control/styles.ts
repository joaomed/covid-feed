import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ContainerCard = styled(Box)({
  height: '180px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
  fontFamily: 'Roboto',
  border: '1px solid #DEDFE0',
  color: '#12406C'
})

export const HeaderCard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontWeight: 500,
  fontSize: '16px'

})

export const BodyCard = styled(Box)({
  fontWeight: 500,
  fontSize: '30px'
})

export const FooterCard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontWeight: 500,
  fontSize: '14px',
  a: {
    color: '#41BCF9'
  }
})

export const ArrowFooter = styled(ArrowForwardIcon)({
  color: '#41BCF9',
  width: '18px'
})
