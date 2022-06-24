import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { globalVariables } from '../../../../styles/globalVariables';

export const StyledPromptQuestion = styled(Typography)(() => ({
  fontSize: '16px',
  color: globalVariables.colors.primary,
}));

export const StyledPromptAction = styled(Link)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  color: globalVariables.colors.primary,
}));
