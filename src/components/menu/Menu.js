import React from "react";
import { Menu, Options } from "./Menu.styled";
import branding from "../../assets/branding.png";
import inactiveMenu from "../../assets/ph.png";
import activeMenu from "../../assets/placeholder.png";

export default () => {
  return (
    <Menu>
      <div className="brandingContainer">
        <img src={branding} className="branding" />
        <h1>GitScan</h1>
      </div>
      <Options>
        <div className="optionsContainer">
          <div className="active">
            <div className="status"></div>
            <img src={activeMenu} className="active" />
            <span>Activity</span>
          </div>
          <div>
            <img src={inactiveMenu} />
            <span>Integrations</span>
          </div>
          <div>
            <img src={inactiveMenu} />
            <span>Team</span>
          </div>
          <div>
            <img src={inactiveMenu} />
            <span>Preferences</span>
          </div>
        </div>
      </Options>
    </Menu>
  );
};
