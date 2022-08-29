import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = (props) => {
    const isAuth = props.isAuth
    const logOut = props.logOut
    console.log('props', props)
    console.log('isAuth', isAuth)
    console.log('logOut', logOut)
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/customUsers'>Users</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/todos'>ToDos</NavLink>
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
                {/*{this.isAuth() ? <NavBtn onClick={() => this.logOut()}>Logout</NavBtn> : <NavBtnLink to='/login'>Login</NavBtnLink> }*/}
                {isAuth ? <NavBtn onClick={logOut}>Logout</NavBtn> : <NavBtnLink to='/login'>Login</NavBtnLink> }
            </Nav>
        </>
    );
};

export default Navbar;
