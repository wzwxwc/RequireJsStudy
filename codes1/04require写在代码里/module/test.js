/**
 * Created by zcRescuer on 2017/5/11.
 */
require.config({
    paths: {
        aa: "./a"
    }
});
require([], function () {
    var flag = true;
    if (flag) {
        //下述这种用法是行不通的！！
        require("./a")
    } else {
        require("./b");
    }
});