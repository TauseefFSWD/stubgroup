import React from "react";
import "./HeroSection.css";
import EvaluationForm from "./EvaluationForm";
import g from "../assets/google.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Make More Money From Google AdWords</h2>
        <ol>
          <li>Cut wasted spend</li>
          <br />

          <li>Beat your competition</li>
          <br />

          <li>
            Find out how much business AdWords is really sending you (including
            phone calls)
          </li>
          <br />
        </ol>
        <p>
          Our team of AdWords and PPC advertising experts – ranked by Google in
          the top 3% of Google's Partners worldwide – have done this for
          countless small, medium, and large businesses around the world.
        </p>
        <img src={g} alt="AdWords Ranking" className="ranking-image" />
        <h2>Not Using Google AdWords Yet ?</h2>
        <ol>
          <li>Let's talk about the strategy for you</li>
          <br />
          <br />

          <li>
            We can research your market and give you broad search volume and
            cost per click estimates
          </li>
          <br />
          <br />
          <li>
            We'll explain how Google Adwordsworks,and the best way to use it to
            make you money
          </li>
        </ol>
      </div>
      <div className="evaluation-form-container">
        <EvaluationForm />
      </div>
    </section>
  );
}

export default HeroSection;
