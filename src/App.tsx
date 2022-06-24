import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme/theme';
import MainLayout from './components/layout/mainLayout/MainLayout';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from './styles/globalStyles';
import { FC } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      <MainLayout>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </BrowserRouter>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
