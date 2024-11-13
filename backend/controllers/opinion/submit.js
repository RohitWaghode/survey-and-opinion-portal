const submitOpinion = async (req, res) => {
  const { uid } = req.params;
  const { response } = req.body;

  try {
    if (!response) {
      return res.error("Response is required");
    }
    const opinion = await _models.Opinion.findOne({ uid });
    if (!opinion) {
      return res.error("Opinion not found");
    }

    const update_opinion = {
      $inc: { [`response_count.${response}`]: 1 },
    };

    const updateOpinion = await _models.Opinion.findOneAndUpdate(
      { uid },
      update_opinion,
      { new: true }
    );

    if (!updateOpinion) {
      return res.error("Survey not found");
    }

    return res.success(updateOpinion);
  } catch (error) {
    console.log(error);
    return res.error("Something went wrong", error);
  }
};

module.exports = submitOpinion;
