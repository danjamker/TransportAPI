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

```
options = {};
options["group"] = "route";

transportapi.LiveBusDepartures(atcocode, options, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
