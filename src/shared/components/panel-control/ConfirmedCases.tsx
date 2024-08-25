import { useEffect, useState } from 'react'
import  { SelectChangeEvent } from '@mui/material/Select'
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
import LinearProgress from '@mui/material/LinearProgress';
import { SelectCountries } from '../SelectCountries'

export const ConfirmedCases = (props: {
  confirmedCases?: number
  countriesData: CountryData[] | null
  loading: boolean
}) => {
  const [confirmedCasesCount, setConfirmedCasesCount] = useState(
    0 as number | undefined
  )
  const [country, setCountry] = useState('Global')

  useEffect(() => {
    setConfirmedCasesCount(props?.confirmedCases)
  }, [props.confirmedCases])

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value)
    if (event.target.value === 'Global') {
      clearSelect()
    } else if (props.countriesData) {
      const countryInfo = props.countriesData.find(
        item => item.country === event.target.value
      )
      setConfirmedCasesCount(countryInfo?.cases)
    }
  }

  const clearSelect = () => {
    setConfirmedCasesCount(props.confirmedCases)
    setCountry('Global')
  }

  return (
    <Box>
      <ContainerCard>
        <HeaderCard>
          <div>
            <RemoveRedEyeOutlinedIcon />
            Confirmed cases
          </div>
          <SelectCountries handleChangeCountry={handleChangeCountry} clearSelect={clearSelect} loading={props.loading} country={country}/>
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
      <Box></Box>
    </Box>
  )
}
