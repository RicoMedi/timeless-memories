"use client";

import React from "react";
import Link from "next/link";
import { HamburgerMenu } from "./ui/HamburgerMenu";

const Nav: React.FC = () => {
  return (
    <header className="nav-container">
      <div className="title-container">
        <h1 className="nav-title">Timeless Memories</h1>
      </div>

      <div className="nav">
        <div className="regular-nav">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/categories" className="nav-link">
            Categories
          </Link>

          <Link href="/videos" className="nav-link">
            Videos
          </Link>

          <Link href="/signin" className="nav-link">
            Sign In
          </Link>
        </div>

        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Nav;
