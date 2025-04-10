import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar bg-${props.mode} border-bottom border-body`}
      data-bs-theme={`${props.mode}`}
      id = "main-nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="./components/about.js">
                About
              </a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === "primary" ? "dark" : "primary"} mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode2}
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === "primary" ? "red" : "primary"} mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode3}
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === "primary" ? "green" : "primary"} mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode4}
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === "primary" ? "blue" : "primary"} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "Set about text here",
};
