import React from "react";

export default function Blog() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Technical Experience, Clickable screenshots of projects and descriptions
        here
      </p>
      <ul>
        <li>
          <a href="https://intense-taiga-33129.herokuapp.com/">
            <img
              src="./Assets/townhallscreenshot.png"
              alt="Bootcamp Project Two: Town Hall"
            />
          </a>
        </li>
        <li>
          <a href="https://gwenparadis.github.io/EventsForecastPlanner/">
            <img
              src="./Assets/eventsforecastplanner.png"
              alt="Bootcamp Project One: Events Forecast Planner"
            />
          </a>
        </li>
        <li>
          <a href="https://gwenparadis.github.io/prework-study-guide/">
            <img
              src="./Assets/prework-pic.png"
              alt="Click to Visit Prework Webpage"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
