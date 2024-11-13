const editSurvey = async (req, res) => {
  const filter = { uid: req.params.uid };
  const dataToUpdate = req.body;

  try {
    const result = await _models.Survey.findOneAndUpdate(filter, dataToUpdate, {
      new: true,
    });

    return res.success(result);
  } catch (err) {
    console.log(err);
    if (err) {
      return res.error("Something went wrong", err);
    }
  }
};

module.exports = editSurvey;