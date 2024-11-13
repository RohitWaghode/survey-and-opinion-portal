function getRoutes(router) {
  const API_VERSION = "v1";
  const API_PREFIX = `/portal/${API_VERSION}`;

  // ping
  router.get("/ping", async (req, res) => {
    res.send("success...");
  });

  // test
  require("./test")(router, API_PREFIX);

  // survey
  require("./survey")(router, API_PREFIX);

  // opinion
  require("./opinion")(router, API_PREFIX);

  return router;
}

module.exports = getRoutes;
