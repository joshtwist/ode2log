function objToBody(obj) {
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

function FB() {
	this.init = function(config) {
		  this.config = config;
	};

	this.logEvent = function(event, params, clientParams) {

		var body = {
			event: event,
			advertiser_id: clientParams.idfa,
		}

		utils.postBodyThen('https://graph.facebook.com/v2.6/' + encodeURIComponent(this.config.appid) + '/activities', objToBody(body), function(rs) {
			utils.log(rs);
		});
	};
}

module.exports = new FB();