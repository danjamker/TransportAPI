#TransportAPI [![NPM version](https://badge.fury.io/js/transport-api.png)](http://badge.fury.io/js/transport-api)

A basic warapper around TransportAPI (http://transportapi.com/)

How to use it:

Install TransportAPI
```
npm install transport-api
```
Require TransposrtAPI 
```javascript
var TransportAPI = require('TransportAPI');
 ```
 
 Instantiate an instance of TransposrtAPI. You'll need to provide options specifying your api key and app ID from transportAPI

```
var options = {
  APIID: process.env.TransportAPI_API_ID,
  APIKey: process.env.TransportAPI_API_KEY 
},
transportapi = new TransportAPI(options);
```

### LiveBusDepartures

Make a call to the API using the LiveBusDepartures.

The LiveBusDepartures function calls to the http://transportapi.com/v3/uk/bus/stop/{atcocode}/live[.format]?{group=} endpoint.

```javascript
var options = {
 group: "route"
};

transportapi.LiveBusDepartures(atcocode, options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
### BusDepartures

The BusDepartures function calls to the http://transportapi.com/v3/uk/bus/stop/{atcocode}/{date}/{time}/timetable[.format]?{group=} endpoint.

```javascript
var options = {
 group: "route"
};

transportapi.BusDepartures(atcocode, options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
### NearbyBusStops

The NearbyBusStops function calls to the http://transportapi.com/v3/uk/bus/stops/near[.format]?{lon=&lat=}[&page=][&rpp=] endpoint.

```javascript
var options = {
 lon: "-0.0938", 
 lat: "51.5207",
 page: 3, 
 rpp: 8
};

transportapi.BusDepartures(options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
### BusStopsInAboundingBox

The BusStopsInAboundingBox function calls to the http://transportapi.com/v3/uk/bus/stops/bbox[.format]?{minlon=&minlat=&maxlon=&maxlat=}[&page=][&rpp=]
 endpoint.

```javascript
var options = {
 minlon: "-0.0938", 
 minlat: "51.5207",
 maxlon: "-0.074",
 maxlat: "51.5286",
 page: 3, 
 rpp: 8
};

transportapi.BusStopsInAboundingBox(options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```

#### Undocumented Functions
1. NearbyTrainStations(options, callback)
2. StationsInAboundingBox(options, callback)
3. StationsServedbyanOperator(station_code, options, callback)
4. ScheduledStationDepartures(station_code, date, time, options, callback)
5. LiveStationDepartures(station_code, options, callback)
6. LiveStationArrivals(station_code, options, callback)
7. ScheduledService(service_code, station_code, date, time, options, callback)
