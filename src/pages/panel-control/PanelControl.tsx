import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
import { CountryData, TotalData } from '../../shared/types'
import { ConfirmedCases, Deaths, Recovered } from '../../shared/components'
import { CountriesService } from '../../shared/services/api/Countries/CountriesService'

export const PanelControl = () => {
  const [totalData, setTotalData] = useState(null as TotalData | null)
  const [countriesData, setCountriesData] = useState(
    null as CountryData[] | null
  )
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const totalData = await axios.get('https://disease.sh/v3/covid-19/all')
        const countriesData = await axios.get(
          'https://disease.sh/v3/covid-19/countries'
        )
        setTotalData(totalData.data)
        setCountriesData(countriesData.data)
        // handleCountriesList(countriesData.data)
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])


  return (
    <Box display='flex' position='relative' bottom='20px' alignItems='center' justifyContent='center' gap='20px' >
      <ConfirmedCases  confirmedCases={totalData?.cases} countriesData={countriesData} loading={isLoading}/>
      <Deaths  deaths={totalData?.deaths} countriesData={countriesData} loading={isLoading}/>
      <Recovered recovereds={totalData?.recovered} countriesData={countriesData} loading={isLoading}/>
    </Box>
  )
}
