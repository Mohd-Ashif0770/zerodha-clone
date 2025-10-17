import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); // close mobile menu
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogOut = async () => {
    try {
      await axios.post(
        "https://zerodha-clone-q795.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "https://zerodha-clone-kappa-eight.vercel.app/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* Hamburger visible only on small screens */}
      <div className="d-flex d-md-none justify-content-between align-items-center px-3 py-2 bg-light shadow-sm">
        <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
        <span
          className="userIconDiv"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* <i className="fa-solid fa-bars"></i> */}
        </span>
      </div>

      {/* Full menu: hidden on mobile by default */}
      <div
        className={`menus ${
          isMobileMenuOpen ? "d-block" : "d-none d-md-block"
        }`}
      >
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                onClick={() => handleMenuClick(idx)}
                style={{ textDecoration: "none" }}
              >
                <p
                  className={selectedMenu === idx ? activeMenuClass : menuClass}
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* Profile icon */}
        <div className="userIconDiv" onClick={handleProfileClick}>
          <span className="userIcon">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>

        {isProfileDropdownOpen && (
          <div className="dropDown">
            <div className="dropDownItem">
              <i className="fa-solid fa-cloud-arrow-up"></i> Upgrade Plan
            </div>
            <div className="dropDownItem">
              <i className="fa-solid fa-gear"></i> Settings
            </div>
            <div className="dropDownItem" onClick={handleLogOut}>
              <i className="fa-solid fa-right-from-bracket"></i> LogOut
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
