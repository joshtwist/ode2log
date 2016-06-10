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

function Amplitude() {
	this.init = function(config) {
		  this.config = config;
	};

	this.logEvent = function(event, params, clientParams) {

		params.event_type = event;
		var eventPayload = [params];

		var body = {
			"api_key" : config.api_key,
			"event" : JSON.stringify(eventPayload)
		};

		utils.postBodyThen('https://api.amplitude.com/httpapi', objToBody(body), function(rs) {
			utils.log('Amplitude: ' + rs);
		});
	};
}

module.exports = new Amplitude();