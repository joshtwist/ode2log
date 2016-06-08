
var config;

module.exports.init = function(config) {
  utils.log("L2Configuration recevied");
  utils.log(config);
  config = config;
}

module.exports.log = function(message, params) {
  utils.log("L2 Message :" + message);
  utils.log("L2 Params :" + params);
  utils.log("L2 Config :" + config);
