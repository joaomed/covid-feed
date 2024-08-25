import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { Box } from '@mui/material'
import axios from 'axios'
import { CountryData, TotalData } from '../../types'
import { thousandPointFormat } from '../../helpers'
import { ArrowFooter, BodyCard, ContainerCard, FooterCard, HeaderCard } from './styles'

export const Deaths = (props: {countriesList: string[], deaths?: number, countriesData: CountryData[] | null}) => {
  const [deathsCount, setDeathsCount] = useState(0 as number | undefined)
  const [country, setCountry] = useState('')

  useEffect(() => {
    setDeathsCount(props?.deaths)
  }, [props.deaths])
  
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string)
  }

  return (
    <Box>
      <ContainerCard>
        <HeaderCard>
          <RemoveRedEyeOutlinedIcon />
          Deaths
          <FormControl variant="standard" sx={{ ml: 4, minWidth: 100 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={country}
              label="Age"
              onChange={handleChangeCountry}
            >
              {props.countriesList.map(item => {
                return <MenuItem value={item}>{item}</MenuItem>
              })}
            </Select>
          </FormControl>
        </HeaderCard>
        <BodyCard> {thousandPointFormat(deathsCount)}</BodyCard>
        <FooterCard><a target='_blank' href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public#:~:text=Avoid%20crowds%20and%20close%20contact,when%20you%20cough%20or%20sneeze." rel="noreferrer">Learn how to prevent infections</a> 
        <ArrowFooter />
        </FooterCard>
      </ContainerCard>
      <Box></Box>
    </Box>
  )
}
