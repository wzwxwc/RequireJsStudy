require.config({
    //baseUrl写得是相对路径，而这个相对路径就是基于html本身的
    baseUrl: "./",
    waitSeconds: 2,
    paths: {
        text: "../../deps/plugin_requirejs/text",
        json: "../../deps/plugin_requirejs/json",
        modulefolder: "./modules"
    }
});
require([
    "./modules/module2"], function () {
    //我想让config.json中的模块都加载完成后，再往下执行

    console.log("模块都已经被加载完了");
});