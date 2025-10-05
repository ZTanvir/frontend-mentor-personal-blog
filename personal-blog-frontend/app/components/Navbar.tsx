import avatarImage from "../../public/assets/images/image-avatar.jpg";
import iconMoon from "../../public/assets/images/icon-moon.svg";
import iconSun from "../../public/assets/images/icon-sun.svg";
import iconMenu from "../../public/assets/images/icon-menu.svg";
import iconMenuClose from "../../public/assets/images/icon-menu-close.svg";
import iconMenuDark from "../../public/assets/images/icon-menu-dark.svg";
import iconMenuCloseDark from "../../public/assets/images/icon-menu-close-dark.svg";

import { NavLink, Link } from "react-router";
import { useState } from "react";
import { useTheme } from "~/context/themeContext";

type IsMobile = true | false;

const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState<IsMobile>(false);
  const { theme, setTheme } = useTheme();

  function setMobileMenu() {
    if (theme === "light" && toggleMobileNav === false) {
      return iconMenu;
    } else if (theme === "light" && toggleMobileNav === true) {
      return iconMenuClose;
    } else if (theme === "dark" && toggleMobileNav === false) {
      return iconMenuDark;
    } else if (theme === "dark" && toggleMobileNav === true) {
      return iconMenuCloseDark;
    }
  }
  return (
    <nav>
      <div className="bg-neutral-0 flex flex-wrap justify-between rounded-xl px-2 py-1.5 shadow-md dark:bg-neutral-800">
        <Link to="/home">
          <img
            className="h-10 w-10 rounded-xl object-cover"
            src={avatarImage}
            alt="women with blond hair"
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex">
            {/* Desktop navbar */}
            <div className="hidden flex-wrap items-center gap-5 text-neutral-700 md:flex dark:text-neutral-100">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "border-b-3 border-blue-400" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "border-b-3 border-blue-400" : ""
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-b-3 border-blue-400" : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  isActive ? "border-b-3 border-blue-400" : ""
                }
              >
                Newsletter
              </NavLink>
            </div>

            <button
              onClick={() => setToggleMobileNav(!toggleMobileNav)}
              className={`p-2 hover:cursor-pointer sm:hidden ${theme === "light" ? toggleMobileNav && "bg-neutral-700" : toggleMobileNav && "bg-neutral-200"} rounded-lg`}
            >
              <img src={setMobileMenu()} />
            </button>
          </div>
          <button
            onClick={() =>
              setTheme((previousTheme: string) =>
                previousTheme === "light" ? "dark" : "light",
              )
            }
            className="rounded-lg border-1 border-neutral-700 bg-transparent p-2 hover:cursor-pointer"
          >
            <img
              src={theme === "light" ? iconMoon : iconSun}
              alt=""
              className=""
            />
          </button>
        </div>
      </div>

      {toggleMobileNav && (
        <div className="bg-neutral-0 mt-2 flex flex-col gap-2 rounded-xl p-2 text-neutral-700 shadow-md sm:hidden dark:bg-neutral-800 dark:text-neutral-100 [&>*]:not-last:border-b-1 [&>*]:not-last:border-b-neutral-200 [&>*]:not-last:pb-1 dark:[&>*]:not-last:border-b-neutral-500">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "font-semibold" : "font-normal"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "font-semibold" : "font-normal"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold" : "font-normal"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              isActive ? "font-semibold" : "font-normal"
            }
          >
            Newsletter
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
