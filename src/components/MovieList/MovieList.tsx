import { Link } from "react-router-dom";
import FlimCard from "../FlimCard/FlimCard";
import "./MovieList.css";
import { dataType } from "../../types/Types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addPersonalData } from "../../redux/movieSlice";
function MovieList({ genre }: { genre: string }) {
  const data: dataType[] = useSelector((state: RootState) => state.data.data);
  const disPatch=useDispatch()
  return (
    <>
      <div className="movieList">
        <div className="swiperHeader">
          <h1>{genre}</h1>
        </div>
        <div className="movieSwiper">
          {data.map((item, index) => {
            if (
              item.genre[0] === genre ||
              item.genre[1] === genre ||
              item.genre[2] === genre
            ) {
              return (
                <Link key={index} to={"/Movie"} onClick={()=>{
disPatch(addPersonalData(item))
                }}>
                  <FlimCard key={index} data={item} />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default MovieList;
