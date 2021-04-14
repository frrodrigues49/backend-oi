const { msg_success, msg_error } = require("../helpers/messages");

exports.getAll = async (model, req, res) => {
  const { document, uf, city } = req.body;
  try {
    const data = await model.find({
      $or: [{ document }, { uf }, { city }]
    });
    msg_success(res, 200, { people_numbers: data });
  } catch (err) {
    msg_error(res, 400, "Unable to list people_numbers", err);
  }
};
