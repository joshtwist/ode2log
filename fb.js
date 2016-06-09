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

		params._eventName = event; // lazy

		var body = {
			event: 'CUSTOM_APP_EVENTS', // TODO - only do this if not a core event (not MOBILE_APP_INSTALL or DEFERRED_APP_LINK)
			advertiser_id: clientParams.idfa,
			application_tracking_enabled: 1, // TODO - actually read
			advertiser_tracking_enabled: 1, // TODO - actually read
			custom_events: JSON.stringify([params])
		};

		utils.postBodyThen('https://graph.facebook.com/v2.6/' + encodeURIComponent(this.config.appid) + '/activities', objToBody(body), function(rs) {
			utils.log(rs);
		});
	};
}

module.exports = new FB();