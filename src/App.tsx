import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';
import { Header } from './shared/components';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Header/>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

