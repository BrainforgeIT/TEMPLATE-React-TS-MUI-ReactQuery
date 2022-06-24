import styled from '@emotion/styled';
import { globalVariables } from '../../../styles/globalVariables';

export const StyledErrorMessage = styled('p')(() => ({
  color: globalVariables.colors.error,
  fontSize: '16px',
  margin: 2,
}));
