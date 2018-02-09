/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
require.config({
    baseUrl: "./"
});
console.log("main.js的require之前");
require(["a1"], function (instanceA) {
    //下述say方法执行ok
    // setTimeout(function () {
    //     g2.b.say();
    // }, 1000);

    //下述say方法执行报错
    // g2.b.say();
    console.log("main.js的require内部");
    // instanceA.say();

});
console.log("main.js的require之后");
