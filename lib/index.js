var log = require('debug'),
    request = require('request'),
    util = require('util'),
    _ = require('lodash');

function TransportAPIError (errors) {
	  Error.captureStackTrace(this, TransportAPIError);
	  this.errors = errors;
	}

	util.inherits(TransportAPIError, Error);

	TransportAPIError.prototype.toString = function toString (){
	  return "TransportAPIError: " + this.errors;
	}

	function TransportAPI (options) {
	  if ( ! options) throw new ForecastError('APIKey and APIID must be set on TransportAPI options');
	  if ( ! options.APIKey) throw new ForecastError('APIKey must be set on TransportAPI options');
	  if ( ! options.APIID) throw new ForecastError('APIID must be set on TransportAPI options');

	  this.APIKey = options.APIKey;
	  this.APIID = options.APIID;
	  this.url = 'http://transportapi.com/v3/uk';
	}
	
	TransportAPI.prototype.LiveBusDepartures = function LiveBusDepartures (atcocode ,options, callback) {
		  if (typeof options === 'function') {
		    callback = options;
		    options = {};
		  }
		  var url = this.url + "/bus/stop/" + atcocode +"/live.json";
		  options["api_key"] = this.APIKey
		  options["app_id"] = this.APIID
		  var query = _.reduce(options, function (result, val, key) {
		    if (result) return result + '&' + key + '=' + val;
		    return result + '?' + key + '=' + val;
		  }, '');

		  url += query;
		  console.log(url)
		  log('get ' + url);

		  request.get(url, function (err, res, data) {
		    if (err) {
		      callback(err);
		    } else {
		      data = JSON.parse(data);
		      console.log(data)
		      callback(null, res, data);
		    }
		  });
		};

	
	TransportAPI.prototype.BusDepartures = function BusDepartures (atcocode, date, time ,options, callback) {
		  if (typeof options === 'function') {
		    callback = options;
		    options = {};
		  }
		  var url = this.url + "/bus/stop/" + atcocode +"/"+date+"/"+time+"/timetable.json";
		  options["api_key"] = this.APIKey
		  options["app_id"] = this.APIID
		  var query = _.reduce(options, function (result, val, key) {
		    if (result) return result + '&' + key + '=' + val;
		    return result + '?' + key + '=' + val;
		  }, '');

		  url += query;
		  console.log(url)
		  log('get ' + url);

		  request.get(url, function (err, res, data) {
		    if (err) {
		      callback(err);
		    } else {
		      data = JSON.parse(data);
		      log(data)
		      callback(null, res, data);
		    }
		  });
		};

	TransportAPI.prototype.NearbyBusStops = function NearbyBusStops(options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/bus/stops/near.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });
	};

	TransportAPI.prototype.BusStopsInAboundingBox = function BusStopsInAboundingBox(options, callback){
		
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/bus/stops/bbox.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });

	}

	TransportAPI.prototype.NearbyTrainStations = function NearbyTrainStations(options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/stations/near.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });

	};

	TransportAPI.prototype.StationsInAboundingBox = function StationsInAboundingBox(options, callback){
		
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/stations/bbox.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });

	}

	TransportAPI.prototype.StationsServedbyanOperator = function StationsServedbyanOperator(station_code, options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/operator/"+station_code+"/stations.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });
	}

	TransportAPI.prototype.ScheduledStationDepartures = function ScheduledStationDepartures(station_code, date, time, options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/station/"+station_code+"/"+date+"/"+time+"/timetable.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });

	}

	TransportAPI.prototype.LiveStationDepartures = function LiveStationDepartures(station_code, options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/station/"+station_code+"/live.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });
	};

	TransportAPI.prototype.LiveStationArrivals = function LiveStationArrivals(station_code, options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/station/"+station_code+"/live_arrivals.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });
	}

	TransportAPI.prototype.ScheduledService = function ScheduledService(service_code, station_code, date, time, options, callback){
		if (typeof options === 'function') {
				    callback = options;
				    options = {};
		}

		var url = this.url + "/train/service/"+service_code+"/"+station_code+"/"+date+"/"+time+"/timetable.json";

		options["api_key"] = this.APIKey
		options["app_id"] = this.APIID
		var query = _.reduce(options, function (result, val, key) {
		if (result) return result + '&' + key + '=' + val;
		   return result + '?' + key + '=' + val;
		}, '');

		url += query;
		console.log(url)
		log('get ' + url);

		request.get(url, function (err, res, data) {
		if (err) {
			callback(err);
		} else {
			data = JSON.parse(data);
		    log(data)
		    callback(null, res, data);
		}
	  });

	}

module.exports = TransportAPI;