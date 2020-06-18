
// TypeScript 声明文件

// 引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能
// 解决:
// 需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件

declare var jQuery: (selector: string) => any;
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除
jQuery('#foo');

declare module Runoob { 
    export class Calc { 
       doSum(limit:number) : number; 
    }
 }


// 引用 CalcTest.ts 文件代码：
 /// <reference path = "Calc.d.ts" /> 
// var obj = new Runoob.Calc(); 
// obj.doSum("Hello"); // 编译错误
// console.log(obj.doSum(10));// 需要传入数字参数