import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ClientsTestimonials from "./components/ClientsTestimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ClientsTestimonials />
      <Footer />
    </div>
  );
}

export default App;
