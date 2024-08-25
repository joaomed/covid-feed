import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { Box } from '@mui/material'
import axios from 'axios'
import { CountryData, TotalData } from '../../shared/types'
import { ConfirmedCases, Deaths, Recovered } from '../../shared/components'

export const PanelControl = () => {
  const [totalData, setTotalData] = useState(null as TotalData | null)
  const [countriesData, setCountriesData] = useState(
    null as CountryData[] | null
  )
  const [countriesList, setCountriesList] = useState([] as string[])
  const [country, setCountry] = useState('')

  function handleCountriesList(data: CountryData[]) {
    setCountriesList(data.map(info => info.country))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalData = await axios.get('https://disease.sh/v3/covid-19/all')
        const countriesData = await axios.get(
          'https://disease.sh/v3/covid-19/countries'
        )
        setTotalData(totalData.data)
        setCountriesData(countriesData.data)
        handleCountriesList(countriesData.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  console.log('data', totalData)
  console.log('countries', countriesData)
  console.log('countriesList', countriesList)

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string)
  }

  return (
    <Box display='flex' position='relative' bottom='20px' alignItems='center' justifyContent='center' gap='20px' >
      <ConfirmedCases countriesList={countriesList} confirmedCases={totalData?.cases} countriesData={countriesData}/>
      <Deaths countriesList={countriesList} deaths={totalData?.deaths} countriesData={countriesData}/>
      <Recovered countriesList={countriesList} recovereds={totalData?.recovered} countriesData={countriesData}/>
    </Box>
  )
}
