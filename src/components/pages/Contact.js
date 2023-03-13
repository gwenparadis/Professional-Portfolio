import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m8u9ifj",
        "template_j0hader",
        form.current,
        "Io58VW2QLKZsm2d3C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div class="bg-dark text-white p-5 text-center">
      <div class="text-center border border-light rounded p-3">
        <h1 class="p-2">Contact Information</h1>
        <h5 class="p-2 text-info">
          Connect with me on your preferred Social Networking platform
        </h5>
        <div>
          <a href="https://github.com/gwenparadis">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/gwen-paradis-b2abb7192/">
            LinkedIn
          </a>
        </div>
      </div>

      <div class="container mt-3">
        <h5 class="p-2 text-center text-info">
          If connecting on social media isn't your thing, contact me directly by
          filling out the form below
        </h5>
        <form
          ref={form}
          onSubmit={sendEmail}
          class="form-control card flex-center border border-info p-5 rounded"
        >
          <h3 class="text-info text-center">Email Me</h3>
          <small class="text-info mb-2">
            I will only use this information to return your direct contact.
          </small>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Full Name"
              name="user_name"
              required
            ></input>

            <input
              type="email"
              class="form-control"
              placeholder="Preferred Email Address"
              name="user_email"
              required
            ></input>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control mt-2 mb-2"
              placeholder="Message Subject"
              name="subject"
              required
            ></input>
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <small class="p-2 text-info">
            Clicking the button below will send the information entered above
            directly to the email inbox of Gwen Paradis
          </small>
          <button type="submit" class="btn btn-info p-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
