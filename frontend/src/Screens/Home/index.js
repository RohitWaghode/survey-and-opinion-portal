import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home.css"; // Import external styles

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <nav className="nav">
          <Link to="/add">
            <button>Add Survey</button>
          </Link>
          <Link to="/list">
            <button>Show Survey List</button>
          </Link>
        </nav>
      </div>
      <div className="p">
        <p>
          India is a vast and diverse country located in South Asia, known for
          its rich history, vibrant culture, and significant global influence.
          With over 1.4 billion people, it is the world's most populous
          democracy and the second-largest country by population. India boasts a
          wide range of landscapes, from the towering Himalayas in the north to
          the tropical beaches in the south, with a variety of climates and
          ecosystems. The country is home to a multitude of languages,
          religions, and traditions, making it a melting pot of cultures. India
          has a long and storied history, from ancient civilizations like the
          Indus Valley to its pivotal role in the rise of major religions such
          as Hinduism, Buddhism, Jainism, and Sikhism. It gained independence
          from British rule in 1947 and has since emerged as a rapidly growing
          economy with a significant impact on global trade, technology, and
          politics. Despite its economic progress, India continues to face
          challenges, including poverty, inequality, and environmental concerns,
          but it remains a dynamic nation with immense potential and cultural
          significance on the world stage.
        </p>
      </div>
    </>
  );
};

export default Home;
