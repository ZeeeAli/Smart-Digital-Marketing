import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },

    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white md:text-4xl text-3xl font-bold font-ubuntu">
        Mar
        <span className="text-limegreen italic">Kify</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <ScrollLink
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </ScrollLink>
        ))}
        <RouterLink
          to="/generate-ads"
          className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]"
        >
          Generate Ads
        </RouterLink>
      </ul>

      <button
        onClick={() => navigate("/register")}
        className="bg-limegreen font-ubuntu hover:bg-white text-black px-3 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden"
      >
        HIRE US
      </button>

      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-black p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <ScrollLink
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </ScrollLink>
          ))}
          <RouterLink
            to="/generate-ads"
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"
          >
            Generate Ads
          </RouterLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
