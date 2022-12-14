import React from "react";
import {Link} from "react-router-dom"
import "../Styling/Header.css"

const HeaderLink = ({page}) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);

    return <Link to={`/${page}`}>{title}</Link>;
}

function Header() {
    return (
        <div className="header">
            <HeaderLink page="home"/>
            <HeaderLink page="about"/> 
            <HeaderLink page="shiny"/> 
            <HeaderLink page="contact"/>
        </div>
    )
}

export default Header;
