import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import Card from "../../components/Card";
import FeaturesSection from "../../components/FeaturesSection";
import Testimonial from "../../components/Testimonial";
import NewCard from "../../components/NewCard";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <Nav />
      <Hero />
      <Feature />
      <Card />
      <FeaturesSection />
      <Testimonial />
      <NewCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
