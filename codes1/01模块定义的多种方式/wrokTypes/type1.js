/**
 * 我经常用的方式
 * Created by zcRescuer on 2017/5/4.
 */
define(["js/type3"], function (type3) {
    var temp = function () {
        this.property1 = "hehe";
        this.method1 = function () {
            console.log("method1 is executed.")
        };
        this.type3 = type3;
    };
    return temp;
});