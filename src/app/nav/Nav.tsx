"use client";

import React from "react";
import Link from "next/link";
import { HamburgerMenu } from "./ui/HamburgerMenu";
import "./nav.css";
export const Nav: React.FC = () => {
  return (
    <header className="nav-container">
      <div className="title-container">
        <h1 className="nav-title">Timeless Memories</h1>
      </div>

      <nav className="nav">
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
      </nav>
    </header>
  );
};


