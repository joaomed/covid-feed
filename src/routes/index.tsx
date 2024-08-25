import { Button } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PanelControl } from '../pages/panel-control/PanelControl'

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Button variant='contained' color='primary'>Home</Button>}/>
      <Route path="/panel-control" element={<PanelControl/>}/>
      <Route path="/home" element={<Button variant='contained' color='primary'>Home</Button>}/>
      <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )
}