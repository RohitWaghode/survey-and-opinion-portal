const submitSurvey = async (req, res) => {
  const { uid } = req.params;
  const { response } = req.body;

  try {
    if (!response) {
      return res.error("Response is required");
    }
    const survey = await _models.Survey.findOne({ uid });
    if (!survey) {
      return res.error("Survey not found");
    }

    const update_response = {
      $inc: { [`response_count.${response}`]: 1 },
    };

    const updateSurvey = await _models.Survey.findOneAndUpdate(
      { uid },
      update_response,
      { new: true }
    );

    if (!updateSurvey) {
      return res.error("Survey not found");
    }

    return res.success(updateSurvey);
  } catch (error) {
    console.log(error);
    return res.error("Something went wrong", error);
  }
};

module.exports = submitSurvey;
