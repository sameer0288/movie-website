import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    {" "}
                    <img
                        className="header_icon"
                        src="https://img.icons8.com/cotton/64/000000/movie-beginning--v1.png"
                    />
                </Link>{" "} 
                <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    {" "}
                    <span> Popular </span>{" "}
                </Link>{" "}
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                    {" "}
                    <span> Top Rated </span>{" "}
                </Link>{" "}
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                    {" "} 
                    <span> Upcoming </span>{" "}
                </Link>{" "}
                <span class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </span>
            </div>{" "} 

            <div className="headerRight">
                <Link to="/movies/login" style={{ textDecoration: "none" }}>
                    {" "}
                    <span className="login">
                        {" "}
                        <img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-login-buttons-others-inmotus-design.png" />{" "}
                    </span>{" "}
                </Link>{" "}
            </div>
        </div >
    ); 
};

export default Header;
