/**
 * Created by zc on 2016/7/7.
 */
define([], function () {
    var color = "black", price = 100;
    return function trousersFuncName(colorArg, priceArg) {
        //function内的color和外面的color没有任何关系！
        //下面的color和price纯属自己定义的
        this.color = colorArg || color;
        this.price = priceArg || price;
    }
})
