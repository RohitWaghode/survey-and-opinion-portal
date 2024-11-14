import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../../../Components/API";
import "../../../Styles/AddSurvey.css";

const UpdateSurvey = () => {
  const { uid } = useParams();
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const fetchSurveyData = async () => {
    try {
      const response = await API.GET(`/survey/list`);
      const survey = response.data.output.find((survey) => survey.uid === uid);

      if (survey) {
        setQuestion(survey.question);
        setResponses(survey.response);
      } else {
        console.log("Survey not found");
      }
    } catch (error) {
      console.log("Error fetching survey data", error);
    }
  };

  useEffect(() => {
    fetchSurveyData();
  }, [uid]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleResponseChange = (e, index) => {
    const newResponses = [...responses];
    newResponses[index] = e.target.value;
    setResponses(newResponses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedSurvey = {
      question,
      response: responses,
    };

    try {
      await API.PUT(`/survey/edit/${uid}`, updatedSurvey);
      navigate("/list");
    } catch (error) {
      console.log("Error updating survey:", error);
    }
  };

  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/list">
          <button className="nav-btn">Survey List</button>
        </Link>
      </nav>
      <h1 className="heading">Update Survey</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="list">
            <label className="label">Question:</label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              className="input"
            />
          </div>
          <div className="list">
            <label className="label">Responses:</label>
            {responses.map((response, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={response}
                  onChange={(e) => handleResponseChange(e, index)}
                  className="input"
                />
              </div>
            ))}
          </div>
          <button type="submit" className="submit-btn">
            Update Survey
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSurvey;
