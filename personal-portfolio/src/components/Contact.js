import React from "react";

const Contact = () => {
  return (
    <div>
      <hr class="line1"></hr>

      <section id="contact">
        <div class="info">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <a href="https://github.com/tpham912">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tinacpham/">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:tina.pham8912@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="info">
          <h4>Resume</h4>
          <div id="resume">
            <a href="https://my.indeed.com/p/tinap-tw4g6vf">Resume</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
