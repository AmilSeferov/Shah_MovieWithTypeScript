import Swiper from "../../components/Swiper/Swiper";
import FlimCard from "../../components/FlimCard/FlimCard";
import './Home.css'
function Home() {
  return (
    <div className="home">
      <Swiper />
      <div className="flimList">
      <FlimCard/>
      <FlimCard/>
      <FlimCard/>
      <FlimCard/>
      <FlimCard/>
      <FlimCard/>
      <FlimCard/>
      </div>
    </div>
  );
}

export default Home;
