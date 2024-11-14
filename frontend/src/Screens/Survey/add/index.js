import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../Components/API";
import "../../../Styles/AddSurvey.css";

const Addsurvey = () => {
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState(["", "", "", ""]);

  const addSurveData = (index, value) => {
    const response = [...responses];
    response[index] = value;
    setResponses(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const survetData = {
        question,
        response: responses,
      };
      const result = await API.POST("/survey/create", survetData);
      alert("Survey added successfully");
      setQuestion("");
      setResponses(["", "", "", ""]);
      console.log("Survey Data", result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/list">
          <button className="nav-btn">Show Survey List</button>
        </Link>
      </nav>
      <h1 className="heading">Add Survey</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="list ">
          <label className="label">Question: </label>
          <input
            type="text"
            placeholder="Add Your Question here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="input"
          />
        </div>
        {responses.map((item, index) => (
          <div key={index} className="list">
            <label className="label">Response {index + 1}: </label>
            <input
              type="text"
              placeholder="Add Response"
              value={item}
              onChange={(e) => addSurveData(index, e.target.value)}
              className="input"
            />
          </div>
        ))}

        <button type="submit" className="submit-btn">
          Create Survey
        </button>
      </form>
    </div>
  );
};

export default Addsurvey;
