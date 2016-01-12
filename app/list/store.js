/**
 * Created by soraping on 16/1/2.
 */
'use strict';

var {Immutable} = require('util/lib');
var {msg, Store} = require('iflux');

var appStore = module.exports = Store({
    list:Immutable.Map()
});

