import "./About.css";
import { RiMovieFill } from "react-icons/ri";
function About() {
  return (
    <div className="about">
      <div className="logo">
        <RiMovieFill className="icon" />
        <p>ShahMovie</p>
      </div>
      <div className="info">
        ShahMovie is a platform designed for discovering the latest and most
        popular movies, TV series, and documentaries. Driven by our passion for
        cinema, we aim to bring the best content to our audience. With our
        user-friendly interface, you can easily find your favorite genres,
        explore trending productions, and access the latest releases quickly. We
        are constantly evolving to enhance your entertainment experience and
        provide the best service possible. Unlock the world of cinema with
        ShahMovie and enjoy your favorite productions!
      </div>
    </div>
  );
}

export default About;
