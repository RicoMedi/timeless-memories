'use client'
import { Nav } from "../nav/Nav";
import { TravelContainer } from "./ui/TravelContainer";
import './home.css'

export const Home: React.FC = () => {
  return (
    <div id="container">
      <div className="nav-wrapper">
        <Nav />
      </div>
      <div className="content-wrapper">
        <h1> Content box</h1>
        <h1> details </h1>
        <TravelContainer />
      </div>
    </div>
  );
};
