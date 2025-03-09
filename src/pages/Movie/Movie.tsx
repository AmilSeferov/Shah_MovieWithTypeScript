import { useSelector } from "react-redux";
import "./Movie.css";
import { IoExitOutline } from "react-icons/io5";
import { RootState } from "../../redux/store";
function Movie() {
  const data =useSelector((state:RootState)=>state.data.personalData)
  return (
    <div className="movie">
      <div className="exit">
        <IoExitOutline />
      </div>
      <div className="content">
        <div className="text">
          <h2>{data.title}</h2>
          <p>
            {data.synopsis}
          </p>
          <p className="imdb">Imdb:{data.imdbrating}</p>
        </div>
        <img src={data.imageurl[0]} alt="" />
      </div>
    </div>
  );
}

export default Movie;
