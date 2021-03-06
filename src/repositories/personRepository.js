const { msg_success, msg_error } = require("../helpers/messages");

exports.getAll = async (model, req, res) => {
  try {
    const data = await model.find().sort({ createdAt: -1 });
    msg_success(res, 200, { peoples: data });
  } catch (err) {
    msg_error(res, 400, "Unable to list peoples", err);
  }
};

exports.getById = async (model, req, res) => {
  try {
    const data = await model.findById(req.params.id);
    msg_success(res, 200, { peoples: data });
  } catch (err) {
    msg_error(res, 400, "Unable to list peoples", err);
  }
};

exports.created = async (model, req, res) => {
  try {
    const data = await model.create(req.body);

    return res.send({ peoples: data });
  } catch (err) {
    msg_error(res, 400, "Registration failed", err);
  }
};

exports.updated = async (model, req, res) => {
  try {
    const data = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.send({ peoples: data });
  } catch (err) {
    msg_error(res, 400, "Updated failed", err);
  }
};

exports.deleted = async (model, req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id);

    msg_success(res, 200, { peoples: data });
  } catch (err) {
    msg_error(res, 400, "Deleted failed", err);
  }
};
