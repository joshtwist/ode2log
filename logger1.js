utils.log("in logger1");

module.exports.init = function(config) {
  utils.log("Configuration recevied");
  utils.log(config);
}

module.exports.logEvent = function(message, params) {
  utils.log("Message :" + message);
  utils.log("Params :" + params);
}
