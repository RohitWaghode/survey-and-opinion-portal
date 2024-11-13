const deleteSurvey = async (req, res) => {
  const filter = { uid: req.params.uid };

  try {
    const result = await _models.Survey.deleteOne(filter);
    return res.success(result);
  } catch (err) {
    console.log(err);
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
};

module.exports = deleteSurvey;
