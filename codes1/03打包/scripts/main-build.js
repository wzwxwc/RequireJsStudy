define("oneName", [], function () {
    return 1
}), define("twoName", [], function () {
    return 2
}), define("threeName", [], function () {
    return 3
}), require.config({
    paths: {
        oneName: "./one",
        twoName: "./two",
        threeName: "./three"
    }
}), require(["oneName", "twoName", "threeName"], function (e, n, t) {
    alert(e + n + t)
}), define("main", function () {
});