import "./Movie.css";
import { IoExitOutline } from "react-icons/io5";
function Movie() {
  return (
    <div className="movie">
      <div className="exit">
        <IoExitOutline />
      </div>
      <div className="content">
        <div className="text">
          <p>
            With our user-friendly interface, you can easily find your favorite
            genres, explore trending productions, and access the latest releases
            quickly. We are constantly evolving to enhance your entertainment
            experience and provide the best service possible. Unlock the world
            of cinema with ShahMovie and enjoy your favorite productions!
          </p>
          <p className="imdb">Imdb:8.0</p>
        </div>
        <img src="https://i.imgur.com/WDPNgdo.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Movie;
