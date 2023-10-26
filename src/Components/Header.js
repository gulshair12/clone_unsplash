import React from "react";
import logoImage from "../Assets/Design.png"
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Main navigation container */}
      <nav className="flex-no-wrap relative flex w-full items-center justify-between py-2 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Logo */}
          <Link to="/">
            <div className="mb-4 ml-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0">
              <img
                src={logoImage}
                className="h-[3rem]"
                alt="unsplash Logo"
                loading="lazy"
              />
            </div>
          </Link>
          {/* Search Bar */}
          <div className="mr-2">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-[35rem] rounded-full p-2 pl-10 text-sm text-gray-900 bg-slate-100 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Search high-resolution images"
                  required
                />
              </div>
            </form>
          </div>
          {/* Left navigation links */}
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
            <li className="mb-4 lg:mb-0 lg:pr-2">
              <Button buttonVariant="header_buttons">Explore</Button>
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-2 ">
              <Button buttonVariant="header_buttons">Advertise</Button>
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-4">
              <Button buttonVariant="colored_button">Unsplash+</Button>
            </li>

            <li className="mb-4 lg:mb-0 lg:pl-12  border-l border-gray-400">
              <Link to="/collection">
                <Button buttonVariant="header_buttons">
                  Collection Images
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
