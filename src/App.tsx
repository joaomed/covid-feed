import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { ThemeProvider } from '@emotion/react'
import { LightTheme } from './shared/themes'
import { Header, LateralMenu } from './shared/components'

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <LateralMenu>
          <Header />
          <AppRoutes />
        </LateralMenu>
      </BrowserRouter>
    </ThemeProvider>
  )
}
