import { AppBar, styled, Typography } from '@mui/material';
import MainBg from '../../../assets/images/main_background.svg';
import { globalVariables } from '../../../styles/globalVariables';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: globalVariables.header.height,
  padding: '0 100px',

  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

export const StyledFooter = styled('footer')(({ theme }) => ({
  position: 'relative',
  bottom: '0',
  width: '100%',
  height: globalVariables.footer.height,
  backgroundColor: theme.palette.primary.main,
}));

export const StyledMain = styled('main')(({ theme }) => ({
  minHeight: `calc(100vh - ${globalVariables.header.height} - ${globalVariables.footer.height})`,
  paddingTop: '64px',
  backgroundImage: `url(${MainBg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat',
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledTypography = styled(Typography)({
  fontSize: '1rem',
  color: globalVariables.colors.darkInfo,
});

export const StyledImage = styled('img')({
  height: '24px',
  maxWidth: '200px',
});
