import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../Components/API";
import "../../../Styles/ListSurvey.css";

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState([]);

  const fetchSurveyList = async () => {
    try {
      const response = await API.GET("/survey/list");
      if (Array.isArray(response.data.output)) {
        setSurveyData(response.data.output);
      } else {
        console.log("Error fetching survey data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchSurveyList();
  }, []);

  return (
    <div className="survey-list-container">
      <nav className="nav">
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/add">
          <button className="nav-button">Add Survey</button>
        </Link>
      </nav>
      <h1 className="survey-list-heading">Survey List</h1>
      <div className="survey-list-box">
        {surveyData.length > 0 ? (
          <ol className="survey-list">
            {surveyData.map((survey, index) => (
              <li key={index} className="survey-item">
                <h3>{survey.question}</h3>
                <ol className="survey-responses">
                  {survey.response.map((item, i) => (
                    <li key={i} className="survey-response">
                      {item}
                    </li>
                  ))}
                </ol>
                <Link to={`/edit/${survey.uid}`}>
                  <button className="edit-button">Edit</button>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p>No surveys available.</p>
        )}
      </div>
    </div>
  );
};

export default SurveyList;
