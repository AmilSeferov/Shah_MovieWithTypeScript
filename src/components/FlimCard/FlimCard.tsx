import { Button } from "react-bootstrap";
import "./FlimCard.css";
import { dataType } from "../../types/Types";
function FlimCard({data}:{data:dataType}) {
  console.log(data)
  return (
    <div className="cardBody" >
     <div className="img">
      <img src={data.imageurl[0]} alt="" />
        <div className="imd">{data.imdbrating}</div>
     </div>
    <p>{data.title}</p>
    </div>
  );
}

export default FlimCard;
