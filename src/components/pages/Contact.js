import React from "react";

export default function Contact() {
  return (
    <div class="bg-dark text-white p-5">
      <h1 class="text-center p-2">Contact Me</h1>
      <p class="p-2 text-center text-info">
        Send a message by submitting the form below!
      </p>
      <div class="container">
        <form class="border border-info p-5 rounded">
          <div class="form-group">
            <label class="p-2">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="your email here"
            ></input>
            <small class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label class="p-2">Message</label>
            <input
              type="password"
              class="form-control mb-4"
              placeholder="your message here"
            ></input>
          </div>
          <button type="submit" class="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
