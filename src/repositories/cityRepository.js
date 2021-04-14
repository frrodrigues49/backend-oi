const { msg_success, msg_error } = require("../helpers/messages");

exports.getAll = async (model, req, res) => {
  try {
    const data = await model.find({ uf: req.params.uf }).sort({ name: 1 });
    msg_success(res, 200, { cities: data });
  } catch (err) {
    msg_error(res, 400, "Unable to list cities", err);
  }
};
