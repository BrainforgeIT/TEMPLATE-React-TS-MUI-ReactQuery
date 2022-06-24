import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../../static/routes';
import { StyledPromptAction, StyledPromptQuestion } from './RegisterPrompt.Elements';

const RegisterPrompt: FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <StyledPromptQuestion variant="body1">
        {t('login.no_account_question')}{' '}
        <Typography variant="body1" component="span">
          <StyledPromptAction to={routes.register}>{t('login.no_account_action')}</StyledPromptAction>
        </Typography>
      </StyledPromptQuestion>
    </Box>
  );
};

export default RegisterPrompt;
