import  { useState } from "react";
import axios from "axios";
import userImage from "../user-image.jpg";
import "../App.css";
import Profile from "../pages/Profile";
import { NavLink } from "react-router-dom";

const Joke = () => {
  const [jokes,setJokes] = useState();
  const handleJoke = async () => {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
    setJokes(res.data);
    setSetups(res.data.setup);
    setPunchlines(res.data.punchline);
  };
  const[setups,setSetups] = useState();

  const[punchlines,setPunchlines] = useState();

  return (
    <div className="container">
      <div className="box">
        <i className="fas fa-quote-left fa2"></i>
        <div className="text">
          <i className="fas fa-quote-right fa1"></i>
          <div>
            <h3>😂<span>Joke of the day</span>😂</h3>
            <p>{setups}</p>
            <h4>{punchlines}</h4>
            <button onClick={handleJoke}>Next</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        Created with ❤️ by Snehasish
      </footer>
      {/* Floating circle icon */}
      <NavLink to="/about">

      <div className="floating-icon" >
        <img src={userImage} alt="User" className="user-image" />
      </div>
      </NavLink>


    </div>
  );
};

export default Joke;