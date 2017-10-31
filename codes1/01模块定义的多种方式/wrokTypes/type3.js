/**
 * 武汉用的方式
 * Created by zcRescuer on 2017/5/4.
 */
define(function () {
    function logMsg(msg) {
        showLog(msg);
        console.log(msg);
    }

    function showLog(msg) {
        document.getElementById("body").innerHTML += "</br>" + msg
    }

    return {
        numStatic: 1,
        logMsg: logMsg
    }
});