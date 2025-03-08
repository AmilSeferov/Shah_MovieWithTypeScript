import Swiper from "../../components/Swiper/Swiper";
import "./Home.css";
import MovieList from "../../components/MovieList/MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { dataType } from "../../types/Types";
function Home() {
  const genres: string[] = useSelector((state: RootState) => state.data.genre);
  console.log();

  return (
    <div className="home">
      <Swiper />
      <div className="flimList">
        {genres.map((item, index) => (
          <MovieList key={index} genre={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
