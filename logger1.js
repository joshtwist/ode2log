utils.log("in logger1");

module.exports.init = function(config) {
  utils.log("Configuration recevied");
  utils.log(config);
}

module.exports.logEvent = function(event, params, clientParams) {
  utils.log("Message :" + event);
  utils.log("Params :" + params);
}
