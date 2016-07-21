/**
 * Created by zcG460 on 2016/7/15.
 */
define([], function () {
    console.log("进入moduleReturnObject内部");
    var result = function () {
        this.name = "hehe";
    }
    return result;
})
