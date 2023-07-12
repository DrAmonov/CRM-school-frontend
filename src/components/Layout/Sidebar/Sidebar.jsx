"use client";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";

export default function MultiLevelDropdown() {
  const { setLanguage, language } = useContext(LocalizationApi);

  let url = useLocation().pathname;
  return (
    <Sidebar
      className="bg-white scrollbar h-[629px] scrollbar-thumb-red-900 scrollbar-track-red-500"
      aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items className="h-[800px]">
        <Sidebar.ItemGroup>
          <Sidebar.Item
            className="active:bg-gray-400"
            href="#"
            icon={HiChartPie}>
            <p>
              {language === "uz"
                ? "MANAMAAAAN"
                : language === "ru"
                ? "Я ЗДЕЕЕСЬ"
                : "Dashboard"}
            </p>
          </Sidebar.Item>
          <Sidebar.Collapse
            className="hover:text-blue active:text-blue"
            icon={HiShoppingBag}
            label="E-commerce">
            <Sidebar.Item
              href="/product"
              className={`${
                url === "/product"
                  ? "bg-blue text-gray"
                  : "hover:text-gray hover:bg-blue transition transform duration-500"
              }`}>
              Products
            </Sidebar.Item>
            <Sidebar.Item
              href="/product"
              className={`${
                url === "/about"
                  ? "bg-blue text-gray"
                  : "hover:text-gray hover:bg-blue transition transform duration-500"
              }`}>
              About
            </Sidebar.Item>
            <Sidebar.Item
              href="/about"
              className={`${
                url === "/product"
                  ? "bg-blue text-gray"
                  : "hover:text-gray hover:bg-blue transition transform duration-500"
              }`}>
              Refunds
            </Sidebar.Item>
            <Sidebar.Item
              href="/product"
              className={`${
                url === "/product"
                  ? "bg-blue text-gray"
                  : "hover:text-gray hover:bg-blue transition transform duration-500"
              }`}>
              Shipping
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item className="active:bg-gray-400" icon={HiInbox}>
            <p>Inbox</p>
          </Sidebar.Item>
          <Sidebar.Item className="active:bg-gray-400" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item className="active:bg-gray-400" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item>
          <Sidebar.Item className="active:bg-gray-400" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item className="active:bg-gray-400" icon={HiTable}>
            <p>Sign Up</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
