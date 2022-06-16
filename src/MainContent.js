import React from "react";
import { ReactDOM } from "react";
import mypic from "./images/IMG-20211101-WA00262.jpg"
import email from "./images/Button.png"
import linkdin from "./images/Button (1).png"


function Intro(){
    return(
        <div>
            <img src={mypic} className="profile-pic" alt=""/>
            <h2 className="name">K. Santosh Iyer</h2>
            <h5 className="job">Frontend Developer</h5>
            <h6 className="website">santoshiyer.website</h6>
            <ul className="handles">
                <li className="links">
                    <a href="ksantoshiyer44@gmail.com">
                        <img src={email} className="" alt="" />
                    </a>
                </li>
                <li className="links">
                    <a href="https://www.linkedin.com/in/k-santosh-iyer-159107205/">
                    <img src={linkdin} className="" alt="" />
                    </a>
                </li>
            </ul>
        </div>
        
    )
}

function MoreInfo(){
    return(
        <div className="more-info">
            <h3> About </h3>
            <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            <h3> Intrests </h3>
            <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
        
    )
}

function MainContent (){
    return (
        <div className='main-content'>
            <Intro/>
            <MoreInfo/>
        </div>
    )
}


export default MainContent;