import React from "react";
import FeaturedMarket from "../components/FeaturedMarket";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import HeaderNav from "../components/HeaderNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChefProfile from "../components/ChefProfile";
import CustomerReviews from "../components/CustomerReviews";

const Main = () => {
  return (
    <>
      <Cart />
      <main className="snap-y snap-mandatory overflow-scroll w-screen h-screen lg:h-auto lg:w-auto relative ">
        <Navbar />
        <Hero />
        <ChefProfile />
        <FeaturedMarket />
        {/* <CustomerReviews /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
