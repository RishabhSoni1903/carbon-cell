import React from "react";
import { Logo } from "../assets";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const links = [
    {
      name: "Population",
      to: "/population",
    },
    {
      name: "Crypto Currency",
      to: "/crypto",
    },
    {
      name: "Connect Wallet",
      to: "/wallet",
    },
  ];

  const location = useLocation();

  const checkActive = (nav) => {
    const isActive = `${location.pathname === nav ? "text-[#2AB42A]" : ""}`;
    return isActive;
  };

  return (
    <div className="min-h-screen w-64 pt-4 text-white bg-[#1A1E1C]">
      <div className="px-2">
        <img src={Logo} alt="logo" />
      </div>
      <div className="mt-12">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`block px-2 py-3 my-4 font-semibold cursor-pointer hover:text-[#2AB42A] ${checkActive(
              link.to
            )}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
