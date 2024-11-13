const createOpinion = async (req, res) => {
  const { question, response } = req.body;

  if (!Array.isArray(response) || response.length < 2 || response.length > 4) {
    return res.error("You must provide minimum 2 or maximum 4 response");
  }

  try {
    const result = await _models.Opinion.create({ question, response });

    return res.success(result);
  } catch (err) {
    console.log(err);
    return res.error("Something went wrong", err);
  }
};

module.exports = createOpinion;
