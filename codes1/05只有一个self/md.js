/**
 * Created by zc on 2017/7/17.
 */
define([], function () {
    console.log(this);
    var self = null;
    var temp = function () {
        self = this;
    };
    temp.prototype.m1 = function () {
        setTimeout(function () {
            console.log(self);
        }, 1000)
    };
    temp.prototype.m2 = function () {
        var self2 = this;
        setTimeout(function () {
            console.log(self2);
        }, 1000)
    };
    return temp;
});