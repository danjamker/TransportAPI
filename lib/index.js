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
	
	TransportAPI.prototype.LiveBusDepartures = function LiveBusDepartures (atcocode, format ,options, callback) {
		  if (typeof options === 'function') {
		    callback = options;
		    options = {};
		  }
		  var url = this.url + "/bus/stop/" + atcocode +"/live." + format;
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

	
	TransportAPI.prototype.BusDepartures = function LiveBusDepartures (atcocode, format ,options, callback) {
		  if (typeof options === 'function') {
		    callback = options;
		    options = {};
		  }
		  var url = this.url + "/bus/stop/" + atcocode +"/timetable." + format;
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

module.exports = TransportAPI;