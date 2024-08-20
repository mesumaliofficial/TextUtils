import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#">
                  {props.item}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.ToggleMode('primary')}} style={{height: '30px',width:'30px',cursor:"pointer"}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.ToggleMode('danger')}} style={{height: '30px',width:'30px',cursor:"pointer"}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.ToggleMode('success')}} style={{height: '30px',width:'30px',cursor:"pointer"}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.ToggleMode('warning')}} style={{height: '30px',width:'30px',cursor:"pointer"}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.ToggleMode('dark')}} style={{height: '30px',width:'30px',cursor:"pointer"}}></div>
              <div className="bg-light rounded mx-2 text-dark" onClick={()=>{props.ToggleMode('light')}} style={{height: '30px',width:'30px',cursor:"pointer"}}></div>
              </div>
            <div className={`form-check form-switch mx-3 text-${props.mode ==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={()=>{props.ToggleMode(null)}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};

//  Navbar.defaultProps = {
//   title: 'React js',
//   item: 'Homess'
//  }
