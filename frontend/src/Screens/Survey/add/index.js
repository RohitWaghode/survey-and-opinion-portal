import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../Components/API";

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

      setQuestion("");
      setResponses(["", "", "", ""]);
      console.log("Survey Data", result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/list">
          <button>Show Survey List</button>
        </Link>
      </nav>
      <h1>Add Survey</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question: </label>
          <input
            type="text"
            placeholder="Add Your Question here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        {responses.map((item, index) => (
          <div key={index}>
            <label>Response {index + 1}: </label>
            <input
              type="text"
              placeholder="Add Response"
              value={item}
              onChange={(e) => addSurveData(index, e.target.value)}
            />
          </div>
        ))}

        <button type="submit">Create Survey</button>
      </form>
    </div>
  );
};

export default Addsurvey;
