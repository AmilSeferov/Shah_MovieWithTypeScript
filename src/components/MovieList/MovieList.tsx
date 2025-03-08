
import FlimCard from '../FlimCard/FlimCard';
import './MovieList.css'
function MovieList() {
  return (
    <div className='movieList'>
        <div className="swiperHeader">
             <h1>Dram</h1>
        </div>
        <div className="movieSwiper">
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
       <FlimCard/>
  
        </div>
    </div>
  )
}

export default MovieList