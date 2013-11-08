
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
	 		transportAPI.BusDepartures(ATCOCode, "2013-11-08","09:06",format, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#NearbyBusStops', function () {
	 	it('should return data for a Location', function(done){
	 		transportAPI.NearbyBusStops({"lat":51.527789,"lon":-0.102323,"page":3,"rpp":10}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#BusStopsInAboundingBox', function () {
	 	it('should return data for a BoundingBox', function(done){
	 		transportAPI.BusStopsInAboundingBox({"minlon":-0.0938,"minlat":51.5207,"maxlon":-0.074,"maxlat":51.5286,"page":3,"rpp":8}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#NearbyTrainStations', function () {
	 	it('should return data for a Location', function(done){
	 		transportAPI.NearbyTrainStations({"lon":-0.0938,"lat":51.5207,"page":3,"rpp":8}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#StationsInAboundingBox', function () {
	 	it('should return data for a BoundingBox', function(done){
	 		transportAPI.StationsInAboundingBox({"minlon":-0.0938,"minlat":51.5207,"maxlon":-0.074,"maxlat":51.5286,"page":3,"rpp":8}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#StationsServedbyanOperator', function () {
	 	it('should return data for a BoundingBox', function(done){
	 		transportAPI.StationsServedbyanOperator("VI", {}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});


	describe('#ScheduledStationDepartures', function () {
	 	it('should return data for a specific time', function(done){
	 		transportAPI.ScheduledStationDepartures("ZFD","2012-05-01","08:09",{}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#LiveStationDepartures', function () {
	 	it('should return data for a specific Stations', function(done){
	 		transportAPI.LiveStationDepartures("SYD",{}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#LiveStationArrivals', function () {
	 	it('should return data for a specific Station', function(done){
	 		transportAPI.LiveStationArrivals("SYD",{}, function(err, res, data){
	 			if(err) throw err;
	 			log('res: '+ util.inspect(res));
	 			log('data: '+ util.inspect(data));
	 			res.should.not.equal.null;
	 			data.should.not.equal.null;
	 			done();
	 		});
		});
	});

	describe('#ScheduledService', function () {
	 	it('should return data for a specific service', function(done){
	 		transportAPI.ScheduledService("22710002","LUT","2012-05-01","08:17",{}, function(err, res, data){
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