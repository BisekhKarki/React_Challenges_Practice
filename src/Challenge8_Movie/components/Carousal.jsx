import React from 'react'
import { useEffect,useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";
import Loading from "./Loading";
import "../styles/Carousal.css";


function Carousal() {

    let [carosoul, setCarousal] = useState([]);

    let [carosalIndex, setCarousalIndex] = useState(0);
    
    const increaseCarousal = ()=>{
      if(carosalIndex===4){
        setCarousalIndex(0)
      } else {
        setCarousalIndex(carosalIndex+1)
      }
    }
    const decreaseCarousal = ()=>{
      if(carosalIndex===0){
        setCarousalIndex(5)
      } else {
        setCarousalIndex(carosalIndex-1)
      }
    }
  
    function autoCarosoul(){
      if(carosalIndex<0){
          setCarousalIndex(5);
      }else if(carosalIndex===4){
          setCarousalIndex(0);
      } else {
          setCarousalIndex(carosalIndex+1)
      }
    }

      useEffect(()=>{
        let timeout = setTimeout(autoCarosoul,3000);
        return ()=> clearTimeout(timeout)
      })
      

  // Use effect for the carousal
  useEffect(() => {
    async function forCarousal() {
      {
        const Key = "28ebe13d95487c508f56f7eafba79d50";
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${Key}`;
        try {
          let response = await fetch(url);
          let carousalData = await response.json();
          getValueCarousal(carousalData.results);
        } catch (error) {
          console.error(error);
        }
      }
    }
    forCarousal();
    function getValueCarousal(items) {
        if (carosoul.length === 0) {
          let carousalItem = [];
          for (let i = 1; i < 6; i++) {
            let randomValue = Math.floor(Math.random() * items.length);
            let trendingCarousal = items[randomValue];
            carousalItem.push(trendingCarousal);
          }
          setCarousal(carousalItem);
        }
      }
    }, [carosalIndex]);

  return (
    <>
      <div className="carosoul">
          <button onClick={decreaseCarousal} className='left' ><IoArrowBackSharp ></IoArrowBackSharp></button>
          {carosoul.length === 0 ? (
            <Loading />
          ) : (
            <>
              <div className="car" key={carosoul[carosalIndex].id}>
                <img
                  className="carosalPoster"
                  src={`https://image.tmdb.org/t/p/original${carosoul[carosalIndex].poster_path}`}
                  alt={`${carosoul[carosalIndex].title} images`}
                />
              </div>
            </>
          )}
          <button onClick={increaseCarousal} className='right' ><GrLinkNext></GrLinkNext></button>
        </div>
    </>
  )
}

export default Carousal