import React from "react";

export default function About() {
  return (
    <div class="bg-dark text-white p-5">
      <div class="text-center border border-light rounded p-3">
        <h1 class="mb-3">Gwen Paradis</h1>
        <h4 class="mt-3 mb-3">Full Stack JavaScript Software Engineer</h4>
        <a
          class="text-info text-center"
          href="https://www.linkedin.com/in/gwen-paradis-b2abb7192/"
        >
          Click HERE to go straight to my LinkedIn
        </a>
        <br></br>
        <img
          alt="Headshot"
          style={{
            width: 200,
          }}
          src={require("../../images/profile-pic.jpg")}
        ></img>
      </div>

      <div class="container mt-3">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Overview
        </h3>
        <p>
          I am a Software Engineer looking to expand my talents and abilities as
          a Full Stack JavaScript Web Developer. I currently work as a Shopify
          and WordPress Engineer, where I develop, maintain, and customize
          client web pages-- combining the features of these third-party apps
          with my own custom code. Prior to this, I completed a 24-week coding
          bootcamp at the top of my class, where I learned Full Stack Web
          Development, specializing in Model-View-Controller software design
          utilizing MongoDB or SQL for API creation and implementation in the
          backend, as well as functional front-end Javascript with React. I
          offer the communication and community-building skills that I gained in
          my former career as a Social Worker to collaborate with other
          developers using Agile Methodologies. I bring an easy-going
          personality combined with the ability to manage the tougher
          conversations when necessary. I take pride in my work, including
          producing user-friendly designs and effective functioning, presenting
          projects and public speaking, and learning new technologies along the
          way. I love to work hard with a smile. In my spare time I am a
          body-builder, value time with friends and family, and love a good
          Netflix Reality TV Series.
        </p>
      </div>

      <div class="container">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          General Strengths
        </h3>
        <ul>
          <li>
            Incorporating Front-End HTML, CSS, and Javascript in React for a
            Cohesive User Experience
          </li>
          <li>API Creation and Integration (including Third Party API's)</li>
          <li>Model-View-Controller Software Design</li>
          <li>Agile Methodologies (SCRUM, SCRUM master)</li>
          <li>Community Building</li>
          <li>Collaborative Problem Solving</li>
          <li>Public Speaking</li>
        </ul>
      </div>

      <div class="container">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Languages
        </h3>
        <ul>
          <li>Git</li>
          <li>HTML</li>
          <li>
            CSS, including: Bootstrap CSS Framework, Tailwind CSS Framework,
            Daisy UI Tailwind Plugin
          </li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>Liquid</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>GraphQL with Apollo Server</li>
          <li>MySQL and Sequelize</li>
          <li>MongoDB and Mongoose</li>
        </ul>
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Other Technologies
        </h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>Github and Github Pages</li>
          <li>Third Party API integration</li>
          <li>Shopify</li>
          <li>WordPress</li>
          <li>Insomnia for route testing</li>
          <li>Workbench for SQL database management</li>
          <li>MongoDB Compass for MongoDB database management</li>
          <li>Heroku</li>
        </ul>
      </div>
    </div>
  );
}
