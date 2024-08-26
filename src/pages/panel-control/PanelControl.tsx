import {  useLayoutEffect, useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import axios from 'axios'
import {  TotalData } from '../../shared/types'
import { ConfirmedCases, Deaths, Recovered } from '../../shared/components'

export const PanelControl = () => {
  const [totalData, setTotalData] = useState(null as TotalData | null)
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));


  useLayoutEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const totalData = await axios.get('https://disease.sh/v3/covid-19/all')
        setTotalData(totalData.data)
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])


  return (
    <Box display='flex' flexDirection={lgDown ? 'column' : 'row'} position='relative' bottom='20px' alignItems='center' justifyContent='center' gap='20px' >
      <ConfirmedCases  confirmedCases={totalData?.cases} loading={isLoading}/>
      <Deaths  deaths={totalData?.deaths} loading={isLoading}/>
      <Recovered recovereds={totalData?.recovered} loading={isLoading}/>
    </Box>
  )
}
