require([
    "./modules/module2"], function () {
    //我想让config.json中的模块都加载完成后，再往下执行

    console.log("模块都已经被加载完了");
});