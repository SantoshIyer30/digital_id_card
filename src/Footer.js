import React from "react";
import { ReactDOM } from "react";
import instagram from "./images/Instagram Icon.png";
import github from "./images/GitHub Icon.png";
import facebook from "./images/Facebook Icon.png";
import twitter from "./images/Twitter Icon.png";

function Footer(){
    return(
        <div className="footer-container">
            <a href="https://www.instagram.com/ksantoshiyer/">
                <img src = {instagram} className="footer-images" alt=""/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004667808511">
                <img src = {facebook} className="footer-images" alt=""/>
            </a>
            <a href="https://github.com/SantoshIyer30">
                <img src = {github} className="footer-images" alt=""/>
            </a>
            <a href="https://twitter.com/ksantoshiyer">
                <img src = {twitter} className="footer-images" alt=""/>
            </a>
        </div>
    )
}


export default Footer;