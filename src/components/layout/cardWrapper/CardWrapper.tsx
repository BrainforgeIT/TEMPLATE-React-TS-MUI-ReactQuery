import React, { FC } from 'react';
import { CardContent, CardHeader, CardMedia } from '@mui/material';
import { StyledCard, StyledWrapper } from './CardWrapper.Elements';
import { CardWrapperProps } from './CardWrapper.Types';
import { useTranslation } from 'react-i18next';

const CardWrapper: FC<CardWrapperProps> = ({ children, imageUrl, imageAltName, headerTitle, headerSubtitle }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledCard>
        <CardMedia component="img" image={imageUrl} alt={imageAltName} />
        <CardHeader title={t(headerTitle)} subheader={t(headerSubtitle)} />
        <CardContent>{children}</CardContent>
      </StyledCard>
    </StyledWrapper>
  );
};

export default CardWrapper;
