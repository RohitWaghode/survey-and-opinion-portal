async function deleteTest(req, res) {
  const filter = { name: req.body.name };

  try {
    const result = await _models.Test.deleteOne(filter);
    return res.success(result);
  } catch (err) {
    console.log(err);
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
}

module.exports = deleteTest;
