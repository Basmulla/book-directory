/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                    <div className="topnav">
                        <a><NavLink to="/book-directory-client" activeclassname="active">Home Page</NavLink></a>
                    </div>
                <h2>Book Directory API Website</h2>
            </header>
        );
    }
}

export default Header;