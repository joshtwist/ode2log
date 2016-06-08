function objToGABody(obj) {
	var s = "";
	for (var prop in obj) {
		s += encodeURIComponent(prop) + "=";
		s += encodeURIComponent(obj[prop]); 
		s += "&";
	}
	s = s.substring(0, s.length -1); // trim the last &
	utils.log(s);
	return s;
}

function GA() {
	this.init = function(config) {
		  this.config = config;
	};

	this.logEvent = function(message, params) {

		var body = {
			v: 1,
			tid: this.config.tid,
			cid: this.config.cid, // TODO how do you get client 'config'
			t: 'event',
			ec: 'tbd',
			el: message,
			ea: message,
		}

		utils.postBodyThen('https://www.google-analytics.com/collect', objToGABody(body), function(rs) {
			utils.log(rs);
		});
	};
}

module.exports = new GA();