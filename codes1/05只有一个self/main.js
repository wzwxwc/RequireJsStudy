/**
 * Created by zc on 2017/7/17.
 */
console.log("hehe");
var test="in global";
debugger
require(["md"], function (md) {
    var module1 = new md();
    module1.m1();
    module1.m2();
});