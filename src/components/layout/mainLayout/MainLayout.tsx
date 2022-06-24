import { Grid, MenuItem, Select } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FC, ReactNode } from 'react';
import Logo from '../../../assets/icons/logo.svg';
import { StyledAppBar, StyledFooter, StyledImage, StyledMain, StyledTypography } from './MainLayout.Elements';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <StyledAppBar position="relative" color="secondary">
        <Toolbar disableGutters={true}>
          <Grid container alignItems="center" justifyContent="space-between">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <StyledImage src={Logo} alt="Visual English" />
            <Select value={10} variant="standard">
              <MenuItem value={10}>PL</MenuItem>
              <MenuItem value={20}>EN</MenuItem>
              <MenuItem value={30}>DE</MenuItem>
            </Select>
          </Grid>
        </Toolbar>
      </StyledAppBar>
      <StyledMain>{children}</StyledMain>
      <StyledFooter className="flex-center">
        <StyledTypography>Copyright &copy; 2022 Visual English</StyledTypography>
      </StyledFooter>
    </>
  );
};

export default MainLayout;
