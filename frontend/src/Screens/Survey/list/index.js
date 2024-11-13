import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../Components/API";

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState([]);

  const fetchSurvetList = async () => {
    const response = await API.GET("/survey/list");

    if (Array.isArray(response.data.output)) {
      setSurveyData(response.data.output);
    } else {
      console.log("errr");
    }
  };

  useEffect(() => {
    fetchSurvetList();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/add">
          <button>Show Survey List</button>
        </Link>
      </nav>
      <h1>Survey List</h1>
      <ol>
        {surveyData.map((survey, index) => (
          <li key={index}>
            <h3>{survey.question}</h3>
            <ol>
              {survey.response.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SurveyList;
