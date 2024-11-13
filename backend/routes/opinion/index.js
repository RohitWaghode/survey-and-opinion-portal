const opinionControllers = require("../../controllers/opinion");

function opinionRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/opinion/create", opinionControllers.createOpinion);

  router.get(API_PREFIX + "/opinion/list", opinionControllers.listOpinion);

  router.put(API_PREFIX + "/opinion/edit/:uid", opinionControllers.editOpinion);

  router.delete(
    API_PREFIX + "/opinion/delete/:uid",
    opinionControllers.deleteOpinion
  );
  router.post(
    API_PREFIX + "/opinion/submit/:uid",
    opinionControllers.submitOpinion
  );
}

module.exports = opinionRoutes;
