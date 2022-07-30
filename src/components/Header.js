import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notty</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-check form-switch text-light">
              {/* <input
                className="form-check-input"
                onClick={() =>
                  handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
                }
                type="checkbox"
                id="flexSwitchCheckDefault"
              /> */}

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

      {/* <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button> */}
    </div>
  );
};

export default Header;
