import { Box } from '@mui/material'
import {
  ArrowFooter,
  BodyCard,
  ContainerCard,
  FooterCard,
  HeaderCard,
  StarHeader
} from './styles'

export const Trustpilot = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ContainerCard>
        <HeaderCard>
          <StarHeader />
          <span>Trustpilot</span>
        </HeaderCard>
        <BodyCard>
          Show us your love by leaving a <span>positive</span> review on trust
          pilot and receive the extension of 50 additional products
        </BodyCard>
        <FooterCard>
          <a target="_blank" href="https://br.trustpilot.com/" rel="noreferrer">
            Write a review on Trustpilot
          </a>
          <ArrowFooter />
        </FooterCard>
      </ContainerCard>
    </Box>
  )
}
