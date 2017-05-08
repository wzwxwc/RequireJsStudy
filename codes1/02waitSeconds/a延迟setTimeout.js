/**
 * 使用setTimeout来执行延迟（失败）
 * Created by zcRescuer on 2017/5/5.
 */

//下述证明setTimeout并不能延迟后续js语句的执行
console.log("setTimeout之前");
setTimeout("console.log('5秒!')", 5000);
console.log("setTimeout之后");