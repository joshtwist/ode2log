function Logger2() {
	this.init = function(config) {
		  utils.log("L2Configuration recevied");
		  utils.log(config);
		  this.config = config;
	};

	this.logEvent = function(message, params) {
		if (params === null) { params = {} };
	  utils.log("L2 Message :" + message);
	  utils.log("L2 Params :" + JSON.stringify(params));
	  utils.log("L2 Config :" + JSON.stringify(this.config);
	};
}

module.exports = new Logger2();