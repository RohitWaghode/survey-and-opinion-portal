import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../../Components/API";

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
    <div>
      <h1>Update Survey</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input type="text" value={question} onChange={handleQuestionChange} />
        </div>
        <div>
          <label>Responses:</label>
          {responses.map((response, index) => (
            <div key={index}>
              <input
                type="text"
                value={response}
                onChange={(e) => handleResponseChange(e, index)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Update Survey</button>
      </form>
    </div>
  );
};

export default UpdateSurvey;
