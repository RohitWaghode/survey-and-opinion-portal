async function listTests(req, res) {
  try {
    const result = await _models.Test.find();
    return res.success(result);
  } catch (err) {
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
}

module.exports = listTests;
