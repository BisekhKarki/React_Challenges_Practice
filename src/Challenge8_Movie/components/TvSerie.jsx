import React, { useEffect, useState } from "react";
import "../styles/HomeEight.css";
import Loading from "./Loading";

function TvSerie() {
  const [shows, setShows] = useState([]);
    const [showPages, setShowPage] = useState(1);
    
  
    const increaseShowPage = () => {
      setShowPage(showPages + 1);
    };
    const decreaseShowPage = () => {
      setShowPage(showPages - 1);
    };

    // const [searchSeries,setSearchSeries] = useState("");
    // function getSearchValue(e){
    //   setSearchSeries(e.target.value)
    // }



    useEffect(() => {
      async function FetchShow() {
        const apiKey = "28ebe13d95487c508f56f7eafba79d50";
        const tvUrl = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${showPages}`;
        try {
          let response = await fetch(tvUrl);
          let data = await response.json();
          setShows(data.results);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
      FetchShow()
    }, [showPages]);
  
  
    const displayName = (t) => {
      if (t.title && t.title !== "") {
        return <p className="title">{t.title}</p>;
      } else if (t.name && t.name !== "") {
        return <p className="title">{t.name}</p>;
      } else {
        return <p className="title">No title available</p>;
      }
    };

    function showButtons(){
      if(showPages===1){
        return (
          <div className="next_previous">
            <button className="nextPage" onClick={increaseShowPage}>Next</button>
          </div>
        )
      }else if(showPages>18){
        return(
      <div className="next_previous">
        <button className="previousPage" onClick={decreaseShowPage}>Back</button>
      </div>
        )
      } else {
        return(
          <div className="next_previous">
          <button className="previousPage" onClick={decreaseShowPage}> Back</button>
          <button className="nextPage" onClick={increaseShowPage}>Next</button>
          </div>
        )
      }
    }

    
    return (
      <>
        <div className="h">
        <div className="home" >
          {shows.length === 0 ? (
            <Loading />
          ) : (
            shows.map((tv) => {
              return (
                <>
                  <div className="movies" key={tv.id}>
                    <img className="poster" src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      alt={`${tv.title} images`}
                    />
                    {displayName(tv)}
                  </div>
                </>
              );
            })
          )}
          <div className="top">
        <p className="pageCount">Page: {showPages}</p>
        </div>
          {showButtons()}
        </div>
        </div>
      </>
    );
}

export default TvSerie