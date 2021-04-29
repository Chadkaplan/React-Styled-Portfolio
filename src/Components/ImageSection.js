import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Chad Kaplan</span></h4>
                <h5>Communication Sciences and Disorders B.S.</h5>
                <p className="about-text">
                    University of Central Florida Full-Stack Bootcamp Graduate.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Education</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: Chad Kaplan</p>
                        <p>: 28</p>
                        <p>: UCF</p>
                        <p>: American</p>
                        <p>: English, ASL</p>
                    </div>
                </div>
                <a href= "chadkaplanresumedownload.pdf" download="chadkaplanresumedownload.pdf"> <button className="btn">Download Resume</button> </a>
            </div>
        </div>
    )
}

export default ImageSection;