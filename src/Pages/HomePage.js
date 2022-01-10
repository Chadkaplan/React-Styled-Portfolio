// No longer needed
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Cleanup imports
import '../App.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Chad Kaplan.</span>
        </h1>
        <p className="h-sub-text">
          I am a Full-Stack Web Developer. I grew up in Coral Springs, Florida
          before eventually moving to Orlando, Florida for my undergraduate
          studies in the Fall of 2011. It took a lot of self-discovery and
          soul-searching before eventually finding my passion for coding. Coding
          coincides with my strengths of reasoning, math, logic, and
          sequencing. I attended the University of Central Florida Full-Stack
          Web Development Bootcamp and immediately fell in love. I have always
          enjoyed learning, and my new field of study only compounded that
          desire to learn. I am currently seeking employment as a Front-End Web
          Developer, Back-End Web Developer, or Full-Stack Web Developer. If you
          have any opportunities available, please contact me on the contact
          page!
        </p>
        <div className="icons">
          {/* The br tag can be self closing */}
          <br />
          {/* Putting the icons on their own line makes this easier to read */}
          <a href="https://github.com/Chadkaplan">
            <FontAwesomeIcon icon={faGithub} className="icon gh" id="giticon" size="6x"/>
          </a>
          <a href="https://www.linkedin.com/in/chad-kaplan-599186198/">
            <FontAwesomeIcon icon={faLinkedin} className="icon gh" id="linkedinicon" size="6x"/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
