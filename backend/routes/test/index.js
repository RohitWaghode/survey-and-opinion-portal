const testControllers = require("../../controllers/test");

function testRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/test/create", testControllers.create);

  router.get(API_PREFIX + "/test/list", testControllers.listTests);

  router.put(API_PREFIX + "/test/edit", testControllers.editTest);

  router.delete(API_PREFIX + "/test/delete", testControllers.deleteTest);
}

module.exports = testRoutes;
