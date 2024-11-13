import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/list">
          <button>Show Survey List</button>
        </Link>
        <Link to="/add">
          <button>Add Survey</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
