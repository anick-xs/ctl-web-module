const path = require('path');

// 拼接路径
function resolve (dir) {
    return path.join(__dirname, dir)
}

// 测试
let url ='http://manager.chetailian.net';
// 测试
// let url ='http://manager.test.chetailian.net';
// 生产
// let url = 'https://mg.chetailian.com';

const loginUrl = process.env.NODE_ENV === 'procution' ?  '/' : url;
module.exports = {
   publicPath:"/ui/module/",
    lintOnSave: true,
    devServer: {
        port: 9535,
        proxy: {
            //登录模块
            '^/api': {
                target: loginUrl,
                changeOrigin:true,
            },
        },
        disableHostCheck: true
    },
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    chainWebpack: config => {
        config.resolve.symlinks(true);
        // image
        const imagesRule = config.module.rule('images');
        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude
            .end();
        //设置 alias
        config.resolve.alias
            .set('@', resolve('src'))
            .set('ctl-web-module/src', resolve('src'));
    }
};


