async function createTest(req, res) {
  try {
    const result = await _models.Test.create(req.body);
    return res.success(result);
  } catch (err) {
    console.log(err);
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
}

module.exports = createTest;
