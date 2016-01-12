/**
 * Created by soraping on 15/12/31.
 * Description: 自动替换chunkhash的工具
 */
var fs = require('fs');
var path = require('path');

/**
 * 静态资源管理webpack插件
 */
module.exports = function assetsPlugin(opts) {

    return function() {
        var output = this.options.output;
        //webpack的path
        var outputPath = output.path;
        //webpack的publicPath
        var publicPath = output.publicPath;
        //删除目录下已经存在的文件
        deleteAllOldFiles(outputPath);
    }
};

/**
 * 删除上一次打包好的所有文件
 *
 * @param publicPath 生产环境打包路径
 */
function deleteAllOldFiles(publicPath) {
    try {
        var res = fs.readdirSync(publicPath);

        res.forEach(function(file) {
            if(/\.js$/.test(file)) {
                var filePath = path.join(publicPath, file);
                console.log('正在删除', filePath);
                fs.unlinkSync(filePath);
            }
        });
    } catch(err) {
        console.log('没有', publicPath ,'目录');
    }
}