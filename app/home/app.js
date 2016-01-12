/**
 * 首页
 * 可以放一些公共的东西，入top footer 等
 * Created by soraping on 16/1/2.
 */
'use strict';
var {React, ReactRouter, Immutable} = require('util/lib');
import {msg, mixins,Store}  from 'iflux';

var appStore = require('store');
var StoreMixin = mixins.StoreMixin;

var App = React.createClass({

    mixins: [StoreMixin(appStore)],

    /**
     * 初始化状态
     */
    getInitialState(){
        return  {};
    },

    componentDidMount(){

    },

    render(){
        return(
            <div>
                <p>这是首页</p>
                {this.props.children}
            </div>
        );
    }

});

module.exports = App;