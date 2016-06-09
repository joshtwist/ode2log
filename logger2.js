function Logger2() {
	this.init = function(config) {
		  utils.log("L2Configuration recevied");
		  utils.log(config);
		  this.config = config;
	};

	this.logEvent = function(event, params, clientParams) {
		if (params === null) { params = {} };
	  utils.log("L2 Message :" + event);
	  utils.log("L2 Params :" + JSON.stringify(params));
	  utils.log("L2 Client :" + JSON.stringify(clientParams));
	  utils.log("L2 Config :" + JSON.stringify(this.config));
	};
}

module.exports = new Logger2();
