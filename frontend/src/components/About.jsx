import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At KVS, we believe food is more than just a meal—it’s an experience. Our dishes are crafted with fresh ingredients, rich flavors, and a passion for quality. Whether you're here for a quick bite or a full meal, we aim to make every visit special.

With a focus on tradition and creativity, our chefs bring you mouthwatering flavors, while our team ensures a warm and welcoming atmosphere. At KVS, great food and hospitality go hand in hand. We can't wait to serve you!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
