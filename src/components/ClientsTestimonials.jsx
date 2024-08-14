import React from "react";
import "./ClientsTestimonials.css";

function ClientsTestimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-heading">What Our Clients Are Saying</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              <p>
                <b>
                  <span> "So glad </span>
                </b>
                we chose to pass off our ad campaign management to StubGroup.Our
                account manager is quick to put any request on our campaigns
                into effect, and more importantly,they give us the information
                we need to understand our ad campaigns"
              </p>
            </div>
            <div className="testimonial-info">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Mac Spiller"
                className="testimonial-image"
              />
              <div className="testimonial-name">
                <p>
                  <strong>Mac Spiller, </strong> Maddox Industrial Transformer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              <p>
                "StubGroup has really done a great job for us.Not only have they
                honend and increased our click marketing efforts,but they are{" "}
                <b> very respnsive and quick to help </b> us with questions and
                needs as well .Highly recommended."
              </p>
            </div>
            <div className="testimonial-info">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Daniel Greer"
                className="testimonial-image"
              />
              <div className="testimonial-name">
                <p>
                  <strong>Daniel Greer, </strong> Marlow White Uniforms
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              <p>
                "The StubGroup team has truly made a difference in my business
                and <b> taken the headache out of marketing. </b> They listened
                to the unique nature of my business,developed a plan,implemented
                that plan,tweaked that plan and it works ...works well!"
              </p>
            </div>
            <div className="testimonial-info">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Greg Bilbro"
                className="testimonial-image"
              />
              <div className="testimonial-name">
                <p>
                  <strong>Greg Bilbro, </strong> Fair Property Buyers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              <p>
                "I used StubGroup to build my small business.They sought to
                understand the needs of my unique business before designing a
                strategy that would be most effective. I saw results as clicks
                translated into actual customers.
                <b> I highly recommend StubGroup! </b>"
              </p>
            </div>
            <div className="testimonial-info">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="Lisa Thomas"
                className="testimonial-image"
              />
              <div className="testimonial-name">
                <p>
                  <strong>Lisa Thomas, </strong> Due Rewards Midwifery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsTestimonials;
