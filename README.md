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
 
 Instantiate an instance of TransposrtAPI. You'll need to provide options specifying your forecast.io API Key and API ID.

```
var options = {
  APIID: process.env.TransportAPI_API_ID,
  APIKey: process.env.TransportAPI_API_KEY 
},
transportapi = new TransportAPI(options);
```

Make a call to the API using the LiveBusDepartures.

The LiveBusDepartures function calls to the http://transportapi.com/v3/uk/bus/stop/{atcocode}/live[.format]?{group=} endpoint.

```
transportapi.LiveBusDepartures(atcocode, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
