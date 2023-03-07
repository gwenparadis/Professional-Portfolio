import React from "react";

export default function About() {
  return (
    <div class="bg-dark text-white">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
        <h1>About Me</h1>
        <img
          style={{
            width: 200,
          }}
          src={require("../../images/profile-pic.jpg")}
        ></img>
      </div>

      <div class="container">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Overview
        </h3>
        <p>
          I am a Full Stack JavaScript Engineer interested in Full Stack job
          opportunities to continue growth and learning in the field. I have
          completed a 24-week coding bootcamp and apprenticeship, where I
          learned the basics of Full Stack Web Development, gaining technical
          programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap,
          Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. I
          personally specialize in Model-View-Controller software design
          utilizing MongoDB or SQL for API creation and implementation in the
          backend, as well as functional front-end Javascript. I have enjoyed
          utilizing my communication and community-building skills gained in my
          career as a Social Worker to collaborate with classmates using Agile
          Methodologies. I take pride in my work, including producing
          user-friendly designs and effective functioning, presenting projects
          and public speaking, and learning new technologies along the way. I
          bring an easy-going personality combined with a dedication to success
          to all team projects. I love to work hard with a smile. In my spare
          time I compete in Powerlifting, value time with friends and family,
          and love a good Netflix Reality TV Series.
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
          <li>Agile Methodologies</li>
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
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>React.js</li>
          <li>Handlebars.js</li>
        </ul>
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Other Technologies
        </h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>Github</li>
          <li>Insomnia</li>
          <li>Workbench</li>
          <li>MongoDB Compass</li>
          <li>Github Pages</li>
          <li>Heroku</li>
          <li>Third Party API integration</li>
        </ul>
      </div>
    </div>
  );
}
