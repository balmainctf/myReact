/**
 * react-router默认不支持异步的去loader一个handler
 *
 * 希望将来能够扩展一个出来，比如就简单的
 * <Route path="/" asyncHandler={'xx'} />
 *
 * 但是现在只有自己动手丰衣足食了。
 *
 *
 * 思路:
 * 先返回一个portal组件，然后在componentDidMount中
 * 去异步加载我们的组件，记载完成之后去setState，re-render
 *
 * 具体方案：
 * https://github.com/hufeng/react-async-router
 *
 * 之前的很多的场景我们也这样玩过
 *
 * @param component
 * @returns {*}
 */
"use strict";

var {React} = require('util/lib');
//import Loading from './loading';



/**
 * async loading component
 *
 * @param component 组件的路径
 * @returns {*}
 */
let asyncComponentLoader = (component) => {

    /**
     * 这一次又是portal立功了
     */
    let AsyncComponent = React.createClass({

        getInitialState() {
            return {
                Component: null
            };
        },


        /**
         * 当mouted时候，才去异步的require需要的chunk
         */
        componentDidMount() {
            component((Component) => {
                this.setState({
                    Component: Component
                });
            });
        },


        /**
         * 默认只是去渲染一个loading的组件，也就是在页面什么都不去渲染
         * 当真正的组件模块异步加载完成的时候，才去渲染真正的组件
         *
         * @returns {XML}
         */
        render() {
            var Component = this.state.Component;

            if (Component) {
                return <Component {... this.props}/>;
            } else {
                return <div>loading...</div>;
            }
        }
    });

    return AsyncComponent;
};


module.exports = asyncComponentLoader;
