import avatarImage from "../../public/assets/images/image-avatar.jpg";
import iconMoon from "../../public/assets/images/icon-moon.svg";
import iconSun from "../../public/assets/images/icon-sun.svg";
import iconMenu from "../../public/assets/images/icon-menu.svg";
import iconMenuClose from "../../public/assets/images/icon-menu-close.svg";
import { NavLink } from "react-router";
import { useState } from "react";
import { useTheme } from "~/context/themeContext";

type IsMobile = true | false;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<IsMobile>(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav>
      <div className="dark:bg-neutral-800 bg-neutral-200 flex flex-wrap justify-between px-2 py-1.5 rounded-xl">
        <img
          className="rounded-xl w-10 h-10 object-cover"
          src={avatarImage}
          alt="women with blond hair"
        />
        <div className="flex items-center gap-2">
          <div className="flex">
            <div className="hidden gap-5 flex-wrap items-center md:flex text-neutral-700 dark:text-neutral-100">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/newsletter"
                className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
              >
                Newsletter
              </NavLink>
            </div>

            <button
              onClick={() => setIsMobile(!isMobile)}
              className="hover:cursor-pointer p-2 sm:hidden"
            >
              <img src={isMobile ? iconMenuClose : iconMenu} alt="" />
            </button>
          </div>
          <button
            onClick={() =>
              setTheme((value) => (value === "light" ? "dark" : "light"))
            }
            className="hover:cursor-pointer p-2 border-1 border-neutral-700 rounded-xl bg-transparent"
          >
            <img
              src={theme === "light" ? iconMoon : iconSun}
              alt=""
              className=""
            />
          </button>
        </div>
      </div>

      {isMobile && (
        <div className="bg-neutral-200 dark:bg-neutral-800  text-neutral-700 dark:text-neutral-100 rounded-xl p-2 flex flex-col mt-2 [&>*]:not-last:pb-1   [&>*]:not-last:border-b-1 [&>*]:not-last:border-b-violet-500 ">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/newsletter"
            className={({ isActive }) => (isActive ? "bg-blue-500" : "")}
          >
            Newsletter
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
