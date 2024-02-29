import React from "react";
import "../styles/Footer.css";
import logo from "../images/640px-FMovies_Logo.png";

function Footer() {
  return (
    <>
      <div className="mainFoot">
        <div className="footer">
          <div className="footL">
            <img src={logo} alt="logo" className="lg" />
            <p>
              <a  className="hov" href={"https://ww4.fmovies.co/home/"}>Fmovies-</a>Free movies
              online, here you can watch movies online in high quality for free
              without annoying <br></br>of advertising, just come and enjoy your
              movies online. fmovie, fmovies, bmovies
            </p>
            <div className="la">
              <p>
                Disclaimer: This site does not store any files on its server.
                All contents are provided by non-affiliated third parties.
              </p>
            </div>
          </div>
          <div className="m">
            <h3>Movies</h3>
            <div className="Mtypes">
              <p>Crime</p>
              <p>Documentary</p>
              <p>Action</p>
              <p>Drama</p>
              <p>Thriller</p>
            </div>
          </div>
          <div className="c">
            <h3>Country</h3>
            <div className="Ctypes">
              <p>United States</p>
              <p>Canada</p>
              <p>France</p>
              <p>United Kingdom</p>
              <p>Ireland</p>
            </div>
          </div>
          <div className="fm">
            <h3>Free Movies</h3>
            <div className="Ctypes">
              <p>Movies</p>
              <p>Tv Series</p>
              <p>Top IMDb</p>
            </div>
          </div>
          <div className="help">
            <h3>Help</h3>
            <div className="Ctypes">
              <p>FAQ's</p>
              <p>DMCA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lastLine">
        <p>Copyright © 2024 Fmovies.to. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
