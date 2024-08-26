import { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { Box } from '@mui/material'
import { thousandPointFormat } from '../../helpers'
import {
  ArrowFooter,
  BodyCard,
  ContainerCard,
  FooterCard,
  HeaderCard
} from './styles'
import LinearProgress from '@mui/material/LinearProgress'
import { SelectCountries } from '../SelectCountries'
import axios from 'axios'

export const Recovered = (props: {
  recovereds?: number
  loading: boolean
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [recoveredsCount, setRecoveredsCount] = useState(
    0 as number | undefined
  )
  const [country, setCountry] = useState('Global')
  const loading = props.loading || isLoading

  const fetchData = async (country: string) => {
    setIsLoading(true)
    try {
      const urlString = `https://disease.sh/v3/covid-19/countries/${country}`
      const countriesData = await axios.get(urlString)
      setRecoveredsCount(countriesData?.data.recovered)
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setRecoveredsCount(props?.recovereds)
  }, [props.recovereds])

  const handleChangeCountry = async (event: SelectChangeEvent) => {
    setCountry(event.target.value)
    if (event.target.value === 'Global') {
      clearSelect()
    } else {
      await fetchData(event.target.value)
    }
  }

  const clearSelect = () => {
    setRecoveredsCount(props.recovereds)
    setCountry('Global')
  }

  return (
    <Box>
      <ContainerCard>
        <HeaderCard>
          <div>
            <RemoveRedEyeOutlinedIcon />
            Recovered
          </div>
          <SelectCountries handleChangeCountry={handleChangeCountry} clearSelect={clearSelect} loading={loading} country={country}/>
        </HeaderCard>
        <BodyCard>
          {loading ? (
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
    </Box>
  )
}
