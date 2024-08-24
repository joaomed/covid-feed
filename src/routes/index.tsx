import { Button } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Button>Home</Button>}/>
      <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )
}