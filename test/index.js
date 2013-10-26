'use strict';

var log = require('debug')('forecast.io'),
    util = require('util');

require('should');

var TransportAPI = require('../lib/index');