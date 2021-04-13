exports.msg_success = (res, status, model) => {
  return res.status(status).send(model);
};
exports.msg_error = (res, status, message, err = "") => {
  return res.status(status).send({ error: message + err });
};
