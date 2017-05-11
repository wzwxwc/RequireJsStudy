/**
 * Created by zcRescuer on 2017/5/11.
 */
require.config({
    paths: {
        aa: "./a"
    }
})
define([], function () {
    var flag = true;
    if (flag) {
        //下述这种用法是行不通的！！
        var aa = require("aa");
        // console.log(aa);
    } else {
        require("./b");
    }
});