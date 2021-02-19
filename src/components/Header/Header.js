import React from 'react';

const Header = (props) => {

    let userName = localStorage.getItem("userName");
    const handleSignOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (<div className="Header">
        <div className="header-left">
            <span id="main-head">optima</span>
            <span id="sub">Pay Less,Save More</span>
            <span id="bell">
            <img
                className="layoutimg"
                src="./layoutassets/bell.png"
                alt=""
                height="30px"
            />
          </span>
        </div>
        <div className="header-right">
            <img
                className="layoutimg"
                src="./layoutassets/contact.jpeg"
                alt=""
                height="30px"
            />

            <span className="username-call">Hello {userName}!</span>

            <a href="/">
                <img
                    className="layoutimg"
                    src="./layoutassets/logout.png"
                    alt="Logout"
                    height="29px"
                    onClick={() => handleSignOut}
                />
            </a>
        </div>
    </div>)
}

export default Header;