/**
 * Created by zcRescuer on 2017/5/9.
 */

({
    baseUrl: ".",
    name: "main",
    paths: {
        oneName: "./one",
        twoName: "./two",
        threeName: "./three"
    },
    shim: {
        oneName: {
            deps: ['css!./styles/a.css']
        }
    },
    out: "main-build.js"
})
