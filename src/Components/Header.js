import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: '70px' }}>
                <Container>
                    <NavLink className='text-decoration-none text-white mx-3' to='/'>Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink className='text-decoration-none text-white' to='/'>Home</NavLink>
                    </Nav>
                    <Badge className='m-2' badgeContent={4} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <a className='text-light ' style={{ fontSize: 25, cursor: "pointer" }}><FaShoppingCart /></a>
                    </Badge>
                </Container>

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    Your cart is empty
                </Menu>
            </Navbar>
        </div>
    );
};

export default Header;