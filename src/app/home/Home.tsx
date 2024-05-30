'use client'
import { Nav } from "../nav/Nav";
import { TravelContainer } from "./ui/TravelContainer";
import './home.css'

export const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="nav-wrapper">
        <Nav />
      </div>
      <div className="content-wrapper">
        <TravelContainer />
      </div>
    </div>
  );
};
