import { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { Box } from '@mui/material'
import { CountryData, iPostData } from '../../types'
import { thousandPointFormat } from '../../helpers'
import {
  ArrowFooter,
  BodyCard,
  ContainerCard,
  FooterCard,
  HeaderCard
} from './styles'
import ClearIcon from '@mui/icons-material/Clear'
import LinearProgress from '@mui/material/LinearProgress'

export const AllPosts = (props: { 
  posts: iPostData[]
}) => {
  const [recoveredsCount, setRecoveredsCount] = useState(
    0 as number | undefined
  )
  const [country, setCountry] = useState('Global')
  

  return (
    <Box>
      {/* <ContainerCard>
        <HeaderCard>
          <div>
            <RemoveRedEyeOutlinedIcon />
            Recovered
          </div>
          <div>
            <FormControl variant="standard" sx={{ minWidth: 100 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={country}
                onChange={handleChangeCountry}
                disabled={props.loading}
              >
                <MenuItem value={'Global'}>Global</MenuItem>
                {props.countriesList.map(item => {
                  return <MenuItem value={item}>{item}</MenuItem>
                })}
              </Select>
            </FormControl>
            <ClearIcon onClick={clearSelect} />
          </div>
        </HeaderCard>
        <BodyCard>
          {props.loading ? (
            <LinearProgress />
          ) : (
            thousandPointFormat(recoveredsCount)
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
