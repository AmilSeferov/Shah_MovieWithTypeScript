import { useSelector } from "react-redux";
import "./Movie.css";
import { IoExitOutline } from "react-icons/io5";
import { RootState } from "../../redux/store";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Movie() {
  const data =useSelector((state:RootState)=>state.data.personalData)
  return (
    <div className="movie">
      <div className="exit">
       <Link to={'/'}> <IoExitOutline /></Link>
      </div>
      <div className="content">
        <div className="text">
          <h2>{data.title}</h2>
          <p>
            {data.synopsis}
          </p>
          <p className="imdb">Imdb:{data.imdbrating}</p>
          <Button variant="danger">Izle</Button>
        </div>
        <img src={data.imageurl[0]} alt="" />
      </div>
    </div>
  );
}

export default Movie;
