/**
 * Created by zcG460 on 2016/7/24.
 */
require.config({
    baseurl: "/requireJsStudy/codes2/02多次require一个模块"
});
require(["module1", "module2"], function () {
    console.log("我就想试验一下，那个requiredModule是否会被多次请求？");
});
