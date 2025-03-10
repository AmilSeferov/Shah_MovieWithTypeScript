import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Movie" element={<Movie />}></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
