import React from "react";
import Navbar from "./Navbar";
import { FaVolumeUp } from "react-icons/fa";

const speakDescription = (description) => {
  const speech = new SpeechSynthesisUtterance(description);
  speech.lang = "en-US";
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
};

const HeroSection = () => {
  const handleReservation = () => {
    try {
      // Simulating an error scenario
      throw new Error("Reservation service is currently unavailable. Try again later.");
    } catch (err) {
      alert(err.message); // Show error as a pop-up alert
    }
  };

  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="Delicious Food" />
              <button
              onClick={() => speakDescription("A stack of fluffy pancakes topped with banana slices and fresh mint, drizzled with golden honey.")}
              style={{
                display: "block",
                marginTop: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#333"
              }}
            >
              <FaVolumeUp />
            </button>
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="Decoration Lines" />
              </div>
              <img className="logo" src="logo.svg" alt="Restaurant Logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <img src="hero2.png" alt="Tasty Dishes" />
            <button
              onClick={() => speakDescription("A crispy fried chicken sandwich with purple slaw, served on a toasted sesame bun.")}
              style={{
                display: "block",
                marginTop: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#333"
              }}
            >
              <FaVolumeUp />
            </button>
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
