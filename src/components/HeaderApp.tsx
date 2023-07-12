import * as React from 'react';
import '../assets/fonts/Yellowtail/Yellowtail-Regular.ttf';
import '../assets/css/component/header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import samplePDF from '../assets/resume/text.pdf';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About', 'Projects', 'Contact', 'Resume'];


function HeaderApp() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const links = [
    '#about', '#projects', '#contact', 'resume'
  ]


  return (
    <>
    <div className="header">
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{}}
          >
            <div className='namePart d-none d-lg-block'>
              Muhammad Ahmed Ejaz
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index + page} onClick={handleCloseNavMenu} 
                className={'menuItem menuItem' + index}
                sx={{
                  backgroundColor: '#1A1A1A',
                }}>
                  {(links[index][0]) === '#' ?
                    <a href={links[index]} className="text-white text-decoration-none text-uppercase">

                      <Typography textAlign="center"
                      className={'mt-3 button button' + index}
                      >{page}</Typography>
                    </a>
                    :
                    <a href={samplePDF} target="_blank" rel="noreferrer" className="text-white text-decoration-none text-uppercase">

                      <Typography textAlign="center"
                      className={'mt-3 button button' + index}
                      >{page}</Typography>
                    </a>
                  }
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
          >
            <div className='namePart d-block d-lg-none'>
              Muhammad Ahmed Ejaz
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <div key={index + page}>
                {(links[index][0]) === '#' ?
                  <a href={links[index]} className="text-white text-decoration-none text-uppercase">
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      className={'me-3 button' + index}
                    >
                      {page}
                    </Button>
                </a>
                :
                <a href={samplePDF} target="_blank" rel="noreferrer" className="text-white text-decoration-none text-uppercase">
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      className={'me-3 button' + index}
                    >
                      {page}
                    </Button>
                </a>
                }
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
    {/* <div className='p-3 d-flex justify-content-between align-items-center header '>
      
      <div className='menuPart d-flex w-50 justify-content-end align-items-center'>
        <NavLink to='/about' className="text-white text-decoration-none me-5 text-uppercase">About</NavLink>
        <NavLink to='/projects' className="text-white text-decoration-none me-5 text-uppercase">Projects</NavLink>
        <NavLink to='/contact' className="text-white text-decoration-none me-5 text-uppercase">Contact</NavLink>
        <NavLink to='/resume' className="text-white text-decoration-none text-uppercase">Resume</NavLink>
      </div>
    </div> */}
    </>
  ) 
}

export default HeaderApp