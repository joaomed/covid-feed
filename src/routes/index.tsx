import { Navigate, Route, Routes } from 'react-router-dom'
import { Feed, Home, Trustpilot, PanelControl } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/panel-control" element={<PanelControl/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/trustpilot" element={<Trustpilot/>}/>
      <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )
}