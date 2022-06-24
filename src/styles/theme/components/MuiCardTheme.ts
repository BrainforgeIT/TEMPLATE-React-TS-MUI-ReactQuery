import { CardContent, CardHeader } from '@mui/material';
import { globalVariables } from '../../globalVariables';

export const MuiCardHeader = {
  defaultProps: {
    titleTypographyProps: {
      variant: 'subtitle1',
    },
    subheaderTypographyProps: {
      variant: 'subtitle2',
      color: globalVariables.colors.primary,
    },
    sx: {
      padding: '50px',
      width: '70%',
    },
  },
} as typeof CardHeader.prototype;

export const MuiCardContent = {
  defaultProps: {
    sx: {
      padding: '0 50px',
    },
  },
} as typeof CardContent.prototype;
