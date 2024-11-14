import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../Components/API";

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState([]);

  const fetchSurveyList = async () => {
    const response = await API.GET("/survey/list");

    if (Array.isArray(response.data.output)) {
      setSurveyData(response.data.output);
    } else {
      console.log("Error fetching survey data");
    }
  };

  useEffect(() => {
    fetchSurveyList();
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
              {survey.response.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <Link to={`/edit/${survey.uid}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SurveyList;
