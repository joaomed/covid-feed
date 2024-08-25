import { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { Box } from '@mui/material'
import { CountryData } from '../../types'
import { thousandPointFormat } from '../../helpers'
import {
  ArrowFooter,
  BodyCard,
  ContainerCard,
  FooterCard,
  HeaderCard
} from './styles'
import ClearIcon from '@mui/icons-material/Clear'
import LinearProgress from '@mui/material/LinearProgress';

export const TopPosts = (props: {

}) => {
  
  return (
    <Box>
      {/* <ContainerCard>
        <HeaderCard>
          <div>
            <RemoveRedEyeOutlinedIcon />
            Top posts
          </div>

        </HeaderCard>
        <BodyCard>
          {props.loading ? (
            <LinearProgress />
          ) : (
            thousandPointFormat(confirmedCasesCount)
          )}
        </BodyCard>
        <FooterCard>
          <a
            target="_blank"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public#:~:text=Avoid%20crowds%20and%20close%20contact,when%20you%20cough%20or%20sneeze."
            rel="noreferrer"
          >
            Learn how to prevent infections
          </a>
          <ArrowFooter />
        </FooterCard>
      </ContainerCard>
      <Box></Box> */}
    </Box>
  )
}
