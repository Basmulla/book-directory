/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="topnav">
                    <img src={process.env.PUBLIC_URL + "/images/Atekulla_Basmulla Avatar.png"} width="45" height="45" alt="Avatar" />
                    &nbsp;
                    <a><NavLink to="/book-directory-client" activeclassname="active"><i class="fa fa-fw fa-home"></i>Home</NavLink></a>
                    &nbsp;
                    </div>
                <h2><center>Book Directory API Website</center></h2>
            </header>
        );
    }
}

export default Header;