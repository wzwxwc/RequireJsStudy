/**
 * 通过while来实现延迟
 * Created by zcRescuer on 2017/5/5.
 */
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
console.log("sleep之前");
sleep(5000);
console.log("sleep之后");