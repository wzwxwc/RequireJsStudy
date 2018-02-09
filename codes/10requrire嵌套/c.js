/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
console.log("c.js的define之前");
define([], function () {
    console.log("c.js的define内部");
    var temp = {};
    temp.say = function () {
        console.log("c模块的say方法被执行");
    };
    var g2 = window.g2 || {};
    g2.c = temp;
    window.g2 = g2;
    return temp;
});
console.log("c.js的define之后");