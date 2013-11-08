#TransportAPI
A basic warapper around TransportAPI (http://transportapi.com/)

How to use it:

Install TransportAPI
```
npm install transport-api
```
Require TransposrtAPI 
```javascript
var TransportAPI = require('forecast.io');
 ```
 
 Instantiate an instance of TransposrtAPI. You'll need to provide options specifying your forecast.io API Key and API ID.

```
var options = {
  APIKey: process.env.TransportAPI_API_ID,
  APIKey: process.env.TransportAPI_API_KEY 
},
transportapi = new TransportAPI(options);
```
