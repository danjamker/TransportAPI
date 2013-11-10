#TransportAPI
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

The NearbyBusStops function calls to the http://transportapi.com/v3/uk/bus/stops/near[.format]?{lon=&lat=}[&page=][&rpp=] endpoint.

```javascript
var options = {
 lon: "route", 
 lat: ,
 page: , 
 rpp: 
};

transportapi.BusDepartures(options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```

The BusStopsInAboundingBox function calls to the http://transportapi.com/v3/uk/bus/stops/bbox[.format]?{minlon=&minlat=&maxlon=&maxlat=}[&page=][&rpp=]
 endpoint.

```javascript
var options = {
 minlon: "route", 
 minlat: ,
 maxlon: ,
 maxlat: ,
 page: , 
 rpp: 
};

transportapi.BusStopsInAboundingBox(options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
