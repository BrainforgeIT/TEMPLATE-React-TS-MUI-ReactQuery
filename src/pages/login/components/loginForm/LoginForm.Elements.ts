import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { globalVariables } from '../../../../styles/globalVariables';

export const StyledLoadingButton = styled(LoadingButton)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  color: globalVariables.colors.lightText,
  padding: '14.5px 60px',
  borderRadius: '50px',
}));

export const StyledInputContainer = styled(Box)(() => ({
  width: '100%',
}));
