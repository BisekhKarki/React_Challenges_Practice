import React, { useEffect, useState } from "react";
import "../styles/HomeEight.css";
import Loading from "./Loading";

function HomeEight() {
  const [movies, setMovies] = useState([]);
  const [pages, setPage] = useState(1);

  const nextPage = () => {
      setPage(pages+1);
  };

  const previousPage = () => {
      setPage(pages-1);
  };

  useEffect(() => {
    async function FetchMovie() {
      const apiKey = "28ebe13d95487c508f56f7eafba79d50";
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pages}`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    FetchMovie();
  }, [pages]);

  function showButtons(){
    if(pages===1){
      return (
        <div className="next_previous">
          <button className="nextPage" onClick={nextPage}>Next</button>
        </div>
      )
    }else if(pages>18){
      return(
    <div className="next_previous">
      <button className="previousPage" onClick={previousPage}>Back</button>
    </div>
      )
    } else {
      return(
        <div className="next_previous">
        <button className="previousPage" onClick={previousPage}> Back</button>
        <button className="nextPage" onClick={nextPage}>Next</button>
        </div>
      )
    }
  }

  return (
    <>
      <div className="h">
        <div className="top">
        <h2 className="mainTitle">Top movies</h2>
        <p className="pageCount">Page: {pages}</p>
        </div>
        <div className="home">
          {movies.length === 0 ? (
            <Loading />
          ) : (
            movies.map((films) => {
              return (
                <>
                  <div className="movies" key={films.id}>
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/w200${films.poster_path}`}
                      alt={`${films.title} images`}
                    />
                    {/* <p className="hd">HD</p> */}
                    <h3 className="title">{films.title}</h3>
                    <p className="title">{films.release_date}</p>
                  </div>
                </>
              );
            })
          )}
          { showButtons()}
        </div>
      </div>
    </>
  );
}

export default HomeEight;
