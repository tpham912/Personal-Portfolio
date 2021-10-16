import React from "react";
import password from "../assets/images/password.png";
import workdaysched from "../assets/images/workdaysched.png";
import weatherapp from "../assets/images/weatherapp.png";
import techblog from "../assets/images/techblog.png";
import fitnesstracker from "../assets/images/fitnesstracker.png";
import horiseonweb from "../assets/images/hw1.png";


const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <section id="work">
      <div class="project">
          <a href="https://github.com/tpham912/HoriseonWebsite">
            <img
              src={horiseonweb}
              width="294.5"
              height="150"
              title="horiseon"
              alt="horiseon-logo"
            ></img>
          </a>
          <h3 class="project-title">Horiseon Website </h3>
        </div>

      <div class="project">
          <a href="https://github.com/tpham912/FitnessTracker">
            <img
              src={fitnesstracker}
              width="294.5"
              height="150"
              title="fitnesstracker"
              alt="fitnesstracker-logo"
            ></img>
          </a>
          <h3 class="project-title">Fitness Tracker </h3>
        </div>

        <div class="project">
          <a href="https://tpham912.github.io/Random-Password-Generator-Project/">
            <img
              src={password}
              width="294.5"
              height="150"
              title="Password-Gen"
              alt="password-logo"
            ></img>
          </a>
          <h3 class="project-title">Random Password Generator</h3>
        </div>

        <div class="project">
          <a href="https://tpham912.github.io/Work-Day-Scheduler-Project/">
            <img
              src={workdaysched}
              width="200"
              height="121"
              title="Work-Day-Scheduler"
              alt="work-day-logo"
            ></img>
          </a>
          <h3 class="project-title">Work Day Scheduler</h3>
        </div>

        <div class="project">
          <a href="https://tpham912.github.io/Weather-Dashboard/">
            <img
              src={weatherapp}
              width="200"
              height="121"
              title="Weather-app"
              alt="password-logo"
            ></img>
          </a>
          <h3 class="project-title">Weather Dashboard</h3>
        </div>

        <div class="project">
          <a href="https://tpham912.github.io/TechBlog/">
            <img
              src={techblog}
              width="200"
              height="121"
              title="techblog"
              alt="techblog-logo"
            ></img>
          </a>
          <h3 class="project-title">Tech Blog</h3>
        </div>
      </section>
    </div>
  );
};

export default Projects;
