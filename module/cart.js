/**
 * Created by zc on 2016/7/7.
 * 仓库模块，用于存放衣服
 */
define({
    clothes: [],
    //下述count怎么使用clothes.length？？
    count: 0,
    add: function (cloth) {
        if (cloth) {
            this.count += 1;
            this.clothes.push(cloth);
        }
    },
    delete: function (cloth) {
        if (cloth) {
            var index = this.clothes.indexOf(cloth);
            if (index >= 0) {
                //下述数组需要注意length-1啊，不要忘记减1
                this.clothes[index] = this.clothes[this.clothes.length - 1];
                this.clothes.pop();
                this.count--;
            }
        }
    }
})