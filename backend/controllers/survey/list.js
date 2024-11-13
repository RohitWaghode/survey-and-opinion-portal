const listSurvey = async (req, res) => {
  try {
    const result = await _models.Survey.find();
    return res.success(result);
  } catch (err) {
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
};

module.exports = listSurvey;
