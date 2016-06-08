function Logger2() {
	this.init = function(config) {
		  utils.log("L2Configuration recevied");
		  utils.log(config);
		  this.config = config;
	};

	this.logEvent = function(message, params) {
	  utils.log("L2 Message :" + message);
	  utils.log("L2 Params :" + params);
	  utils.log("L2 Config :" + this.config);
	};


}

module.exports = new Logger2();