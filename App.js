import Row from "./Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Navbar";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title=" Originals  "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now " fetchUrl={requests.fetchTrending} />
      <Row title="Top rated " fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default App;
