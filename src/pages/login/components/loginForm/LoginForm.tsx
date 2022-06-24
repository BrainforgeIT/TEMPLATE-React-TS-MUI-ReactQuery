import { Grid, Input, InputLabel } from '@mui/material';
import React, { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ErrorMessage from '../../../../components/common/errorMessage/ErrorMessage';
import { StyledInputContainer, StyledLoadingButton } from './LoginForm.Elements';
import { IFormInput } from './LoginForm.Types';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" gap="16px" maxWidth="370px" alignItems="center" margin="auto">
        <StyledInputContainer>
          <InputLabel htmlFor="email">{`${t('login.email_label')}*`}</InputLabel>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            render={({ field }): JSX.Element => (
              <>
                <Input disableUnderline id="email" type="email" placeholder={t('login.email_placeholder')} {...field} />
                {errors.email && <ErrorMessage message="Pole jest wymagane" />}
              </>
            )}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <InputLabel htmlFor="password">{`${t('login.password')}*`}</InputLabel>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }): JSX.Element => (
              <>
                <Input disableUnderline id="password" type="password" placeholder={t('login.password')} {...field} />
                {errors.password && <ErrorMessage message="Pole jest wymagane" />}
              </>
            )}
          />
        </StyledInputContainer>
        <StyledLoadingButton type="submit" variant="contained">
          {t('login.login_btn')}
        </StyledLoadingButton>
      </Grid>
    </form>
  );
};

export default LoginForm;
