import { styled } from '@mui/material/styles'
import { Avatar, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const ContainerCard = styled(Box)({
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
  fontWeight: 500,
  fontSize: '16px',
  justifyContent: 'space-between',
  div: {
    display: 'flex',
    alignItems: 'center'
  },
  '& > div:first-of-type': {
    gap: '5px'
  }
})

export const BodyCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBlock: '20px',
  gap: '5px',
  fontWeight: 500,
  fontSize: '14px'
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

export const PostContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Post = styled(Box)({
  fontSize: '14px'
})

export const PostTop = styled(Box)({
  fontSize: '12px',
  color: '#737373',
})
