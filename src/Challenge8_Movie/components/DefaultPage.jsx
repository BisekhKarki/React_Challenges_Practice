import React, { useEffect, useState } from "react";
import "../styles/HomeEight.css";
import Loading from "./Loading";
import Carousal from "./Carousal";


function DefaultPage() {
  const [trendingMovies, setTrending] = useState([]);
  const [trendingPages, setTrendingPage] = useState(1);
  

  const increaseTrendingPage = () => {
    setTrendingPage(trendingPages + 1);
  };
  const decreaseTrendingPage = () => {
    setTrendingPage(trendingPages - 1);
  };

  // Use effect for the rendering the movies
  useEffect(() => {
    async function FetchTrending() {
      const apiKey = "28ebe13d95487c508f56f7eafba79d50";
      const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${trendingPages}`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        setTrending(data.results);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    FetchTrending();
  }, [trendingPages]);

  const displayName = (t) => {
    if (t.title && t.title !== "") {
      return <p className="title">{t.title}</p>;
    } else if (t.name && t.name !== "") {
      return <p className="title">{t.name}</p>;
    } else {
      return <p className="title">No title available</p>;
    }
  };

  function showTrendingButtons() {
    if (trendingPages === 1) {
      return (
        <div className="next_previous">
          <button className="nextPage" onClick={increaseTrendingPage}>
            Next
          </button>
        </div>
      );
    } else if (trendingPages > 18) {
      return (
        <div className="next_previous">
          <button className="previousPage" onClick={decreaseTrendingPage}>
            Back
          </button>
        </div>
      );
    } else {
      return (
        <div className="next_previous">
          <button className="previousPage" onClick={decreaseTrendingPage}>
            {" "}
            Back
          </button>
          <button className="nextPage" onClick={increaseTrendingPage}>
            Next
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <div className="h">
         <Carousal  />
        <div className="home">
          {trendingMovies.length === 0 ? (
            <Loading />
          ) : (
            trendingMovies.map((trends) => {
              return (
                <>
                  <div className="movies" key={trends.id}>
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/original${trends.poster_path}`}
                      alt={`${trends.title} images`}
                    />
                    {displayName(trends)}
                  </div>
                </>
              );
            })
          )}
          <div className="top">
          <p className="pageCount">Page: {trendingPages}</p>
        </div>
          {showTrendingButtons()}
        </div>
      </div>
    </>
  );
}

export default DefaultPage;
