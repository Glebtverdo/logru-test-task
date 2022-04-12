import React from 'react';
import {Container, Box, IconButton, Menu, MenuItem} from "@mui/material"
import { useState } from 'react';
import MainTable from "./components/table/table"
import ChangLanguageButtons from './components/buttons/changLanguageButtons';
import LoadFile from './components/buttons/loadFile';
import AddRow from './components/buttons/addRow';
import TextFieldButton from './components/buttons/textFieldButton';
import DownloadDataWithJson from "./components/buttons/downloadDataWithJson"
import SeeTextField from "./components/buttons/seeTextField"
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (<Container maxWidth="xl">
      <Box sx={{display: { xs: 'none', md: 'flex' }}}
       style={{justifyContent: "center", alignItems: "center"}}>
        <LoadFile />
        <AddRow />
        <TextFieldButton />
        <DownloadDataWithJson />
        <SeeTextField />
        <ChangLanguageButtons />
      </Box>
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
          <MenuItem onClick={handleCloseNavMenu}>
            <LoadFile />
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <AddRow />
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <TextFieldButton />
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <DownloadDataWithJson />
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <SeeTextField />
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <ChangLanguageButtons />
          </MenuItem>
          </Menu>
			</Box>
      
      <MainTable />
    </Container>
  );
}

export default App;
