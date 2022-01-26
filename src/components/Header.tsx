import React, {FC, useContext, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';

import { LangContext } from '../context/lang';

const pages = ['Home', 'About', 'Projects', 'Blog'];
const langs = [
  {
  value: 'KR',
  name: '한국어'
  },
  {
  value: 'EN',
  name: 'English'
  }
]

interface HeaderProps {
  handleScroll: (target:string) => void
}

const Header: FC<HeaderProps> = ({handleScroll}) => {
  const { state: { language }, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleMenuClick = (page: string) => {
    handleScroll(page)
  }

  const handleLangClick = (lang: string) => {
    setAnchorEl(null);
    setLanguage(lang);
  }
  return (
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar 
            sx={{
              backgroundColor: 'primary.800', 
              height: {mobile: 60, tablet: 70, laptop: 80},
              paddingLeft: {mobile: 0.5, tablet: 1.5},
              paddingRight: {mobile: 0.5, tablet: 1.5},
              }}>
            {pages.map((page) => (
                  <MenuItem 
                    key={page} 
                    onClick={()=>handleMenuClick(page)} 
                    sx={{
                      paddingLeft: {mobile: 1, tablet: 2},
                      paddingRight: {mobile: 1, tablet: 2}
                    }}>
                    <Typography textAlign="center" variant="h6"
                      sx={{
                        color: 'primary.contrastText',
                        '&:hover': {
                          color: 'primary.500'
                        }
                    }} >{page}</Typography>
                  </MenuItem>
                ))}
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{marginLeft: 'auto'}}
            >            
              <LanguageIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {langs.map(({value, name})=>(
                <MenuItem
                  key={value}
                  value={value}
                  onClick={()=>handleLangClick(value)} >
                  {name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
  );
};
export default Header;