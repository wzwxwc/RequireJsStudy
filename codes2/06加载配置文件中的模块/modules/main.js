require(["json!./config.json"], function (config) {
    console.log(config);
    var arrModules=config.modules;
    require(arrModules, function () {

    })
});