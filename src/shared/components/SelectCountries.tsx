import { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ClearIcon from '@mui/icons-material/Clear'
import { CountriesService } from '../services/api/Countries/CountriesService'

export const SelectCountries = (props: {
  handleChangeCountry: (event: SelectChangeEvent) => void
  clearSelect: () => void
  loading?: boolean
  country: string
}) => {
  const [countriesList, setCountriesList] = useState(
    [] as { label: string; iso: string }[]
  )
  useEffect(() => {
    CountriesService.getAll().then(result => {
      if (result instanceof Error) {
        alert(result.message)
      } else {
        setCountriesList(result)
      }
    })
  }, [])

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 100 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.country}
          onChange={props.handleChangeCountry}
          disabled={props.loading}
        >
          <MenuItem value={'Global'}>Global</MenuItem>
          {countriesList.map(item => {
            return <MenuItem value={item.label}>{item.label}</MenuItem>
          })}
        </Select>
      </FormControl>
      <ClearIcon onClick={props.clearSelect} />
    </div>
  )
}
