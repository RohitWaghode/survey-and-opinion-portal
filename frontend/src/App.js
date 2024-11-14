import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import SurveyList from "./Screens/Survey/list";
import Addsurvey from "./Screens/Survey/add";
import UpdateSurvey from "./Screens/Survey/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addsurvey />} />
        <Route path="/list" element={<SurveyList />} />
        <Route path="/edit/:uid" element={<UpdateSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;
