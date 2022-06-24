import React, { FC } from 'react';
import { StyledErrorMessage } from './ErrorMessage.Elements';
import { ErrorMessageProps } from './ErrorMessage.Types';

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  // TODO: add translations
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
