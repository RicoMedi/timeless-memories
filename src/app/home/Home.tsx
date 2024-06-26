"use client";
import { Nav } from "../nav/Nav";
import { TravelContainer } from "./ui/TravelContainer";
import "./home.css";

export const Home: React.FC = () => {
  return (
    <div id="container">
      <div className="nav-wrapper">
        <Nav />
      </div>
      <div className="content-wrapper">
        <div className="text-content">
          <h1> Welcome to Timeless Memories </h1>
          <p>
            Discover the joy of seamless travel planning and sharing with
            Timeless Memories. Whether you're planning your next big adventure,
            sharing your itinerary with friends and family, or showcasing your
            travel photos, we've got you covered.
          </p>
          <button className="gt-button"> Get Started</button>
        </div>
      </div>
      <div className="image-container">
        <TravelContainer />
      </div>
    </div>
  );
};
