/**
 * 路由懒加载测试
 * Created by soraping on 16/1/11.
 */
'use strict';
var {React, ReactRouter, Immutable} = require('util/lib');
import {msg, mixins,Store}  from 'iflux';

var appStore = require('store');
var StoreMixin = mixins.StoreMixin;

var App = React.createClass({

    mixins:[StoreMixin(appStore)],

    render(){

        return (

            <div>这是测试页</div>

        );

    }

});

module.exports = App;