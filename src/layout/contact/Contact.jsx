import React from "react";
import Button from "../../components/button/Button";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Contact.css";

const Contact = () => {
  const headerReveal = useScrollReveal({ threshold: 0.15 });
  const formReveal = useScrollReveal({ threshold: 0.15 });
  const channelsReveal = useScrollReveal({ threshold: 0.15 });
  const ctaReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <div className="contact-page">

      {/* Contact Hero */}
      <section className="contact-section">

        <div
          ref={headerReveal.ref}
          className={`contact-header reveal-fade-up ${headerReveal.isVisible ? 'revealed' : ''}`}
        >
          <p className="main-heading">
            LET'S BUILD
            <br />
            <span>THE FUTURE.</span>
          </p>

          <p>
            Ready to create something extraordinary? Drop us a line.
            We’re always looking for the next great collaboration,
            big gaming idea, or wild experiment.
          </p>
        </div>


        {/* Main Contact Area */}
        <div className="contact-grid">

          {/* Form */}
          <div
            ref={formReveal.ref}
            className={`contact-form-box reveal-fade-left ${formReveal.isVisible ? 'revealed' : ''}`}
          >

            <form>

              <div className="form-row">

                <div className="form-group">
                  <label>IDENTITY</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                  />
                </div>

              </div>


              <div className="form-group">
                <label>SUBJECT</label>
                <input
                  type="text"
                  placeholder="e.g. Game Development"
                />
              </div>


              <div className="form-group">
                <label>MESSAGE</label>
                <textarea
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <Button text="INITIATE CONTACT" color="#dfff00" padding="10px 25px" size="9px"/>
            </form>

          </div>


          {/* Direct Channels */}
          <div
            ref={channelsReveal.ref}
            className={`direct-channels reveal-fade-right ${channelsReveal.isVisible ? 'revealed' : ''}`}
          >

            <p>
              DIRECT
              <br />
              CHANNELS
            </p>

            <div className="channel-list">

              <div className="channel">
                <span>OUR EMAIL</span>
                <a href="mailto:jellybytestudios@gmail.com">
                  jellybytestudios@gmail.com
                </a>
              </div>

              <div className="channel">
                <span>OUR DISCORD COMMUNITY</span>
                <a href="#">
                  discord.gg/jellybytestudios
                </a>
              </div>

              <div className="channel">
                <span>INSTAGRAM</span>
                <a href="#">
                  @jellybytestudios
                </a>
              </div>

              <div className="channel">
                <span>LINKEDIN PAGE</span>
                <a href="#">
                  JellyByte Studios
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section
        ref={ctaReveal.ref}
        className={`contact-cta reveal-fade-up ${ctaReveal.isVisible ? 'revealed' : ''}`}
      >

        <div className="cta-content">

          <p className="cta-heading">
            GOT A WILD IDEA? WE'RE ALL
            <br />
            EARS.
          </p>

          <p className="cta-description">
            Whether you're building a game, launching a project,
            or just have an idea worth exploring, we'd love to hear it.
          </p>

          <Button text="START A PROJECT" color="#dfff00" padding="10px 20px" radius="10px" href="#" />

        </div>


        {/* Circular decoration */}
        <div className="cta-circle">
          <div className="cta-circle-inner">
            COLLABORATION MODE
          </div>
        </div>

      </section>

    </div>
  );
};

export default Contact;