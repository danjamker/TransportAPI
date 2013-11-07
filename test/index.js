
var configs = require('../configs');
var log = require('debug')('forecast.io'),
    util = require('util');

require('should');

var TransportAPI = require('../lib/index');

var options = {
  APIKey: process.env.TransportAPI_API_KEY,
  APIID: process.env.TransportAPI_API_ID
},

	ATCOCode = "2500918"
	format = "json"
	transportAPI = new TransportAPI(options)

if ( ! process.env.TransportAPI_API_KEY && ! process.env.TransportAPI_API_ID) {
  throw new Error('tests expect a TransportAPI_API_ID and TransportAPI_API_KEY to be set in your environment variables');
}

if ( ! process.env.TransportAPI_API_ID) {
  throw new Error('tests expect a TransportAPI_API_ID to be set in your environment variables');
}

if ( ! process.env.TransportAPI_API_KEY) {
  throw new Error('tests expect a TransportAPI_API_KEY to be set in your environment variables');
}

describe('TransportAPI', function () {
	describe('#LiveBusDepartures', function () {
	 	it('should return data for a ATCOCode', function(done){
	 		transportAPI.LiveBusDepartures(ATCOCode, format, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#BusDepartures', function () {
	 	it('should return data for a ATCOCode', function(done){
	 		transportAPI.BusDepartures(ATCOCode, format, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});
});