import Swiper from "../../components/Swiper/Swiper";
import FlimCard from "../../components/FlimCard/FlimCard";
import './Home.css'
import MovieList from "../../components/MovieList/MovieList";
function Home() {
  return (
    <div className="home">
      <Swiper />
      <div className="flimList">
        <MovieList/>
        <MovieList/>
        <MovieList/>
        <MovieList/>
    
      </div>
    </div>
  );
}

export default Home;
