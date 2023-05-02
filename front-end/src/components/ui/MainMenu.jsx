import * as React from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
             Dashboard
            <MenuIcon />
        </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
        
        <Divider/>

        <MenuItem onClick={handleClose} component={Link} to="/">Início</MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/payment_method">Métodos de pagamento</MenuItem>
      </Menu>
    </div>
  );
}