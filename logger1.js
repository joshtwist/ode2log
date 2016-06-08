module.exports.init = function(config) {
  utils.log("Configuration recevied");
  utils.log(config);
}

module.exports.log = function(message, params) {
  utils.log("Message :" + message);
  utils.log("Params :" + params);
}