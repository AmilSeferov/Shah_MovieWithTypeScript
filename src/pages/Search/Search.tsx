import { data, Link } from "react-router-dom";
import FlimCard from "../../components/FlimCard/FlimCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Search.css";
import { addPersonalData } from "../../redux/movieSlice";
function Search() {
  const disPatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.search);
  return (
    <div className="search">
      {data[0]?data.map((item, index) => (
        <Link
          key={index}
          to={"/Movie"}
          onClick={() => {
            disPatch(addPersonalData(item));
          }}
        >
          <FlimCard key={index} data={item} />
        </Link>
      )):<h1>Not Found</h1>}
      
    </div>
  );
}

export default Search;
