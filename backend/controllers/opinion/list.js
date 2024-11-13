const listOpinion = async (req, res) => {
  try {
    const result = await _models.Opinion.find();
    return res.success(result);
  } catch (err) {
    if (err) {
      return res.error("Something wents wrong", err);
    }
  }
};

module.exports = listOpinion;
