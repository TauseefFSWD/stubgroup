import React from "react";
import "./EvaluationForm.css";

function EvaluationForm() {
  return (
    <div>
      <div className="evaluation-form-container">
        <h2>Request Your Free Evaluation</h2>
        <p>
          Find out how to save and make more money from Google AdWords —{" "}
          <u>
            <i>
              <span className="value">$500 value!</span>
            </i>
          </u>
        </p>
      </div>

      <div className="red">
        <div className="red">
          <form>
            <label htmlFor="text">Name*</label>
            <input type="text" />
            <label htmlFor="text">Email*</label>
            <input type="email" />
            <label htmlFor="text">Phone Number*</label>
            <input type="tel" />
            <label htmlFor="text">Website</label>
            <input type="text" />
          </form>
        </div>
      </div>
      <div className="evaluation-form-container">
        <button className="btn" type="submit">
          GET A FREE EVALUATION
        </button>

        <b>
          {" "}
          <p className="privacy-notice">We Guarantee 100% Privacy.</p>
        </b>
        <p>Your information will not be shared.</p>
        <div className="contact-info">
          <h2>Call Us with Questions!</h2>
          <p>Phone: (888) 545-8404</p>
          <p>Hours: 9am-5pm (CT)</p>
          <p>Days: Monday-Friday</p>
        </div>
      </div>
    </div>
  );
}

export default EvaluationForm;
