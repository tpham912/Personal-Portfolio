import logo from './logo.svg';
import './style.css';
import Header from './components/Header';
import profile from './assets/images/myself.jpg'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header> </Header>
   
    <img src={profile} alt="profile-pic" class="profile-pic"></img>

    <section id="about">
        <div class="info">
            <h1>About Me</h1>
            <div class="about-me-content">
                <p> Hi, my name is Tina. I'm from Saigon, Vietnam. I was born and raised there until I was 14, but now
                    I'm based in Seattle, Washington. I majored in Biology at the University of Texas at
                    Dallas and graduated with my Bachelor of Science in August 2020. After graduating, I worked in the
                    healthcare industry before deciding to make a career switch into the tech field. I'm currently
                    attending SMU full-stack web developement bootcamp full time.
                    So far, I have experienced working with HTML, advanced CSS, Bootstrap, Javascript and API. Feel free
                    to check out my favorite assignments I've done throughout the course.
                </p>
                <p>
                    Stay tuned for future projects. . . .
                </p>
            </div>
        </div>
    </section>
    <Projects />
    <Contact />
    </>
    
  );
}

export default App;
