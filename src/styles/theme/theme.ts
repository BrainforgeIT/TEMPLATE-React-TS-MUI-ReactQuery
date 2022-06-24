import { createTheme } from '@mui/material/styles';
import { globalVariables } from '../globalVariables';
import { MuiCardContent, MuiCardHeader } from './components/MuiCardTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: globalVariables.colors.primary,
    },
    secondary: {
      main: globalVariables.colors.secondary,
    },
    error: {
      main: globalVariables.colors.error,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h2: {
      fontSize: 32,
      fontWeight: 700,
      color: globalVariables.colors.lightText,
    },
    subtitle1: {
      fontSize: 48,
      fontWeight: 700,
      color: globalVariables.colors.primary,
      textTransform: 'capitalize',
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 400,
      color: globalVariables.colors.primary,
    },

    body1: {
      fontSize: 24,
    },
    body2: {
      fontSize: 16,
    },
  },
  components: {
    // TODO: just as an example of merging - replace with proper data or delete
    MuiCardHeader: MuiCardHeader,
    MuiCardContent: MuiCardContent,
  },
});

export default theme;
