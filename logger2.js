
var me = {
	init : function(config) {
		  utils.log("L2Configuration recevied");
		  utils.log(config);
		  this.config = config;
	},
	logEvent : function(message, params) {
	  utils.log("L2 Message :" + message);
	  utils.log("L2 Params :" + params);
	  utils.log("L2 Config :" + config);
	}
};

module.exports = me;