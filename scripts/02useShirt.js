/**
 * Created by zc on 2016/7/7.
 */
require.config({
    baseUrl: "",
    packages: [],
    paths: {
        shirt: "../modules/shirt",
        shirtfunc: "../modules/shirtfunction",
        trousers: "../modules/trousers"
    }
});

// require(["shirt", "shirtfunc"], function (shirt, shirtfunc) {
//     console.log("shirt.color is " + shirt.color);
//     console.log("shirtfunc.size is " + shirtfunc.size);
// });

require(["shirt", "../modules/shirtfunction", "trousers", "../modules/cart"], function (shirt, shirtfunction, trousers, cart) {
    //下述会报错：shirt不是一个构造器！
    //var myShirt = new shirt();
    cart.add(shirt);
    cart.add(shirtfunction);
    var trousers = new trousers();
    cart.add(trousers);

    console.log(cart);

    cart.delete(shirt);

    console.log(cart);
})