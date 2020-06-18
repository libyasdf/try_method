/*  变量声明 */
// 变量是一种占位符，用于引用计算机内存地址
// 以把变量看做存储数据的容器
// 包含数字和字母
// 下划线 _ 和美元 $
// 不能以数字开头
// 四种方式
// var [变量名] : [类型] = 值;
// var [变量名] : [类型];
// var [变量名] = 值;
// var [变量名];
// typeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误
/* 断言 */
var str1 = "liby";
var str2 = str1;
console.log("str1:", typeof str2);
var num = 2; // 类型推断为 number
console.log("num 变量的值为 " + num);
// 缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型
// num = "12";    // 编译错误
console.log(typeof num);
/* 变量作用域 */
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var object = new Numbers();
console.log("实例变量: " + object.num_val);
