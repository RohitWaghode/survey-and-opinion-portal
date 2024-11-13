async function editTest(req, res) {
  const filter = { name: req.body.name };
  const dataToUpdate = req.body;

  try {
    const result = await _models.Test.findOneAndUpdate(filter, dataToUpdate);
    return res.success(result);
  } catch (err) {
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
}

module.exports = editTest;
