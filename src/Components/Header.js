import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';



const Header = () => {

    const getData = useSelector((state) => state.cartReducer.carts)
    console.log(getData)

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
                    <div className='card_details d-flex justify-content-center align-items-center' style={{ width: '24rem', padding: 10, position: 'relative' }}>
                        <i onClick={handleClose} className='smallclose' style={{ position: 'absolute', top: 3, right: 20, fontSize: 23, cursor: 'pointer' }}><RxCross2 /></i>
                        <p> Your cart is empty</p>
                        <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: '5rem', padding: 10 }} />
                    </div>
                </Menu>
            </Navbar>
        </div>
    );
};

export default Header;