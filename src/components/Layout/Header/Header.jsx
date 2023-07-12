"use client";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import logo from "../../../assets/images/logo.png";
import { FaSquareFull } from "react-icons/fa";

const Header = ({ handler }) => {
  const { theme, toggleTheme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  function onChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <header
      className={`${
        theme === "light" ? "bg-green-500" : "bg-black text-white"
      }`}>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img alt="PreSkool Logo" className="mr-3 h-6 sm:h-9" src={logo} />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              {language === "uz"
                ? "MANAMAAAAN"
                : language === "ru"
                ? "Я ЗДЕЕЕСЬ"
                : "Dashboard"}
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <button className="w-8 bg-gray rounded-full p-2" onClick={handler.enter}>
          <img
            src="https://preschool.dreamguystech.com/template/assets/img/icons/header-icon-04.svg"
            alt="Full Screen"
          />
        </button>
        <div className="w-[43px] overflow-hidden rounded-full">
          <select onChange={onChange} className="border-none w-[70px] bg-gray text-blue focus:border-none">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en" selected>
              en
            </option>
          </select>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
