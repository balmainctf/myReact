/**
 * 入口文件
 * Created by soraping on 15/12/31.
 */
'use strict';

import {React, ReactRouter, ReactDom, Immutable} from 'util/lib.js';
var {msg, mixins,Store} = require('iflux');
var { Router, Route, IndexRoute } = ReactRouter;

import asyncLoader from 'uikit/async-loader';

//首页

import Home from './home/app.js';

import About from 'bundle?lazy&name=about!./about/app';

import List from 'bundle?lazy&name=list!./list/app';

import NoMatch from 'bundle?lazy&name=404page!./404.js';



let routes = (
    <Router>
        <Route name="index" path="/" component={Home} >
            <Route name="about" path="about" component={asyncLoader(About)} />
            <Route name="list" path="list" component={asyncLoader(List)} />
        </Route>
        <Route name='404page' path="*" component={asyncLoader(NoMatch)} />
    </Router>
);


//设置title标题
let titleMap = {
    home:'首页',
};


ReactDom.render(
    <Router routes={routes}/>,document.getElementById('test')
);