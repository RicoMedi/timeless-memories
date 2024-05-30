import React, { useState } from "react";
import MenuButton from "@/assets/menu-button.svg";
import CloseButton from "@/assets/close-button.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className="menu-button-mobile">
      {!showMenu && (
        <Image
          src={MenuButton}
          height={38}
          width={38}
          alt="Open menu button"
          className="menu-button"
          onClick={handleClick}
        />
      )}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5 }}
          className="sidebar"
        >
          <Image
            src={CloseButton}
            height={28}
            width={28}
            alt="Close menu button"
            className="close-menu-button"
            onClick={handleClick}
          />
          <div className="nav-list">
            <Link href="/" className="nav-link">
              Home
            </Link>

            <Link href="/explore" className="nav-link">
              Explore
            </Link>

            <Link href="/plan-trip" className="nav-link">
              Plan Trip
            </Link>

            <Link href="/signin" className="nav-link">
              Sign In
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
