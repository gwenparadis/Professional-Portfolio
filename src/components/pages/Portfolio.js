import React from "react";

export default function Blog() {
  return (
    <div class="bg-dark text-white">
      <h1 class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
        Portfolio
      </h1>

      <div class="container p-5">
        <h2 class="p-3 bg-warning bg-opacity-10 border border-warning border-start-0 rounded-end">
          Town Hall: Full Stack Group Project
        </h2>
        <img
          class="p-3"
          style={{
            height: 400,
          }}
          src={require("../../images/townhallscreenshot.png")}
        ></img>
        <h5 class="text-center">Description</h5>
        <p>
          We used Node.js and Express.js to create a RESTSful API. We used
          Handlebars.js as the templating engine, and we used MySQL and the
          Sequelize ORM for the database. For CSS/styling we used
          Tailwind/daisyUI, and we used placeimg.com for the random image
          generator. We used Insomnia to test routes and Workbench to test
          models, relationships, and queries. We used Github to host our
          repository and Heroku to deploy our solution.
        </p>
        <h5 class="text-center">My Contribution</h5>
        <p>
          Commitment to Agile Methodologies, Front End Functionality, Sign Up
          and Login Forms, Styling with Tailwind CSS Framework, confirming
          functionality of Routes, Final Clean Up of Unecessary components from
          Source Code
        </p>
      </div>

      <div class="container p-5">
        <h2 class="p-3 bg-danger bg-opacity-10 border border-danger border-start-0 rounded-end">
          Event Weather Planner: Front End Group Project
        </h2>
        <img
          class="p-3"
          style={{
            height: 400,
          }}
          src={require("../../images/eventsforecastplanner.png")}
        ></img>{" "}
        <h5 class="text-center">Description</h5>
        <p>
          The motivation to create this application came from the group’s
          interest in outdoor activities and events, with the real world problem
          of weather variation affecting the experience of those events. This
          project was built to allow the User to find events in their desired
          location, while also including a weather forecast to allow the User to
          plan for that event accordingly. This solves the problem of allowing
          the user to make an informed decision about going to an outdoor event,
          travel plans, and more. The group learned how to integrate multiple
          API's in javascript, and style the received information with a new (to
          us) CSS framework, Foundation. The group learned how to delegate and
          collaborate on project elements to create fairness in workload and
          highlight the strengths of each group member. The group also learned
          how make individual working branches on github, complete pull
          requests, and then approve and merge those requests into our main
          branch.
        </p>
        <h5 class="text-center">My Contribution</h5>
        <p>
          Commitment to Agile Methodologies, Creating the HTML to ensure Front
          End presentation and functionality, Mastering the OpenWeather API,
          Mastering the GeoLocation API, creating the Fetch requests and
          integrating this data into the Events API (mastered by another
          teammate), Dynamically rendering the fetched data into the HTML for
          user viewing.
        </p>
      </div>

      <div class="container p-5">
        <h2 class="p-3 bg-danger bg-opacity-10 border border-danger border-start-0 rounded-end">
          JavaScript Quiz: Front End Javascript
        </h2>
        <img
          class="p-3"
          style={{
            height: 400,
          }}
          src={require("../../images/profile-pic.jpg")}
        ></img>{" "}
        <h5 class="text-center">Description</h5>
        <p>
          I have attempted to create an interactive JavaScript quiz utilizing
          original HTML, CSS, and JavaScript elements. This project intends to
          showcase the skills that I have learned in JavaScript. This webpage
          features an EventListener() on the start button, prompting the quiz to
          begin by presenting the first question and starting a timer. The
          answer buttons are interactive. The timer is affected by the user's
          answer choices. When the timer runs out, the endGame() functions are
          run to alert the user that the game is over, and providing an area for
          the user to input their initials to be displayed on the HighScore
          board. The initials and score are saved in local storage, which can be
          seen when you inspect the page. Throughout development, I learned the
          complexity of creating multiple interactive elements on one webpage.
        </p>
      </div>

      <div class="container p-5">
        <h2 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          E-Commerce Back End: Back End MySQL with Sequelize
        </h2>
        <img
          class="p-3"
          style={{
            height: 400,
          }}
          src={require("../../images/profile-pic.jpg")}
        ></img>{" "}
        <h5 class="text-center">Description</h5>
        <p>
          I created this E-Commerce Backend in order to create an interactive
          database to store my store's inventory data. I am able to view product
          Categories, Products, and Tags. I am able to add Categories, Products,
          or Tags, and update existing data, as desired, using Insomnia as the
          interactive space. This application utilizes Node, Express,js to
          create the application routes, MySQL and Sequelize to create, seed and
          update the database, as well as the relational capabilities of MySQL
          when desired. I learned how to improve coding structure and
          accessibility of MySQL databases utilizing Sequelize models, refined
          my knowledge of Express.js routes, and conducted testing of routes and
          database capabilities with Insomnia.
        </p>
      </div>

      <div class="container p-5">
        <h2 class="p-3 bg-light bg-opacity-10 border border-light border-start-0 rounded-end">
          Matching Emails: Regex Tutorial
        </h2>
        <img
          class="p-3"
          style={{
            height: 400,
          }}
          src={require("../../images/profile-pic.jpg")}
        ></img>{" "}
        <h5 class="text-center">Description</h5>
        <p>
          https://gist.github.com/gwenparadis/d094f5546e7de9dce389a57e728d8989
        </p>
      </div>
    </div>
  );
}
