const surveyControllers = require("../../controllers/survey");

function surveyRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/survey/create", surveyControllers.createSurvey);

  router.get(API_PREFIX + "/survey/list", surveyControllers.listSurvey);

  router.put(API_PREFIX + "/survey/edit/:uid", surveyControllers.editSurvey);

  router.delete(
    API_PREFIX + "/survey/delete/:uid",
    surveyControllers.deleteSurvey
  );

  router.post(
    API_PREFIX + "/survey/submit/:uid",
    surveyControllers.submitSurvey
  );
}

module.exports = surveyRoutes;
