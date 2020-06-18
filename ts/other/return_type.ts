/* 函数返回值 */

function libyjson()  {
    var myData = {
        name:'test',
        version:'1.0'
      }
    return myData;
}

function libyad (s:number, df:string) :boolean {
    return true;
}
var a = libyad(1,"d");
console.log("a:",a);
// 可选参数和默认参数
// es6语法
// function libylack(d:string, as ?: string): symbol {
//     let dfs = Symbol("the one");
//     return dfs;
// }

// console.log("symbol:",libylack("s"));//参数可少，不可多

// 默认参数

function calculate(df:number, er:number = 0.03) : number {
    let res = df*er;
    return res;
}
calculate(1000);
calculate(12,0.03);
// 剩余参数——不知道要向函数传入多少个参数
function link_connect(lk:string, ...oj: string[]) :string {
    return lk + oj.join('');
}
console.log("link:",link_connect("Joseph", "Samuel", "Lucas", "MacKinzie"));

function addNumbers(...nums:number[]) {  
    let i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) ;
 addNumbers(10,10,10,10,10);

//  匿名函数_程序运行时动态声明
var msgliby = function(){
    return "liby";
}

var mdffun = function(am:string, gh:string){
    return am + gh;
}

// 匿名函数自调用 _ es6 ???
// (function(){
//     var x = "Hello!!";   
//     console.log(x)     
// })()

// 构造函数 ——使用 JavaScript 内置的构造函数 Function() 来定义函数

var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
// 递归函数
function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial(number - 1));     // 调用自身
    } 
}; 
console.log(factorial(6));      // 输出 720

// Lambda 函数 —— 箭头函数
var foo = (x:number)=>10 + x;//入参没指定类型时，类型推断
console.log("foo:",foo(100));     //输出结果为 110

// 函数重载 类型、数量、顺序
// 重载——方法名字相同，参数不同，返回类型可以相同，也可以不同
// 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表



// json
class ListGiftView{
    private _giftJsonObj = {
          "vipGift": {
              "vip0": {
                  "url": ["resource/uires/imagedemo/img_5.png", "resource/uires/common/icon_40003.png", ],
                  "name": ["英雄1", "道具1",],                
                  "isBuy": "false"
              },
              "vip1": {
                  "url": ["resource/uires/imagedemo/img_5.png", "resource/uires/common/icon_40003.png"],                  
                  "name": ["英雄1", "道具1"],             
                  "isBuy": "false"
              }
             }
        }
    constructor() {
    //   super();
      //使用方括号取值的方法
      var vip: string = "vip" + 0;
      let imgUrl: Array<any> = this._giftJsonObj["vipGift"][vip]["url"] as Array<any>;
      let isBuy: string = this._giftJsonObj["vipGift"][vip]["isbuy"];
  }
}
