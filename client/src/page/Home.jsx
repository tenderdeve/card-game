import React from "react";
import { PageHOC } from "../components";

const Home = () => {
  return <></>;
};

// NOTE Here we are using HOC as the wrapper of second component that is home and title and also description.
export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br /> a Web3 NFT Card Game{" "}
  </>,
  <>
    Connect you wallet to start playing <br /> the ultimate Web3 Battle Card
    Game.{" "}
  </>
);