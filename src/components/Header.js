import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notty</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-check form-switch text-light">

              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() =>
                    handleToggleDarkMode(
                      (previousDarkMode) => !previousDarkMode
                    )
                  }
                />
                <span className="slider round"></span>
              </label>

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
