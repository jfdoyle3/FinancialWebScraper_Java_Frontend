import React, { Component } from "react";
//import { Link } from "react-router-dom";

//import { Navbar, NavItem } from "react-materialize";
// import "../Styling/css/Header.css";

//import "../Styling/css/Header.css";

class HeaderComponent extends Component {
  render() {
  

    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!">Logo</a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
           
                <li>
                 {/* // <Link to="/welcome/user">Home</Link> */}
                 <p>Home</p>
                </li>
           
            
                <li>
                {/* //  <Link to="/cryptocurrenices">Currencies</Link> */}
                <p>item 2</p>
                </li>
           
            </ul>
          
            <ul>
        
                <li>
                {/* //  <Link to="/login">Login</Link> */}
                <p>item 3</p>
                </li>
            
             
                <li>
                  {/* <Link to="/logout" onClick={AuthenticationService.logout}>
                    Logout
                  </Link> */}
                  <p>item 4</p>
                </li>
            
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
