import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { globalVariables } from '../../../../styles/globalVariables';

export const StyledArrowWrapper = styled(IconButton)({
  width: '50px',
  height: '50px',
  margin: '0 10px',
  borderRadius: '100%',
  backgroundColor: globalVariables.colors.primary,

  '&:hover': {
    backgroundColor: globalVariables.colors.primary,
    opacity: 0.9,
  },
});
