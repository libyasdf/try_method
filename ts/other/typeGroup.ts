// 枚举
enum Color {
    Red,//默认情况下，初始值为 0，其余的成员会从 1 开始自动增长
    Green,
    Blue
 }

 let c : Color = Color.Blue;
 console.log("c:",c);

 const getValue = () => {
    return 0
  }
  
  enum List {
    A = getValue(),//A 的值是被计算出来的
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C//如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
  }
  console.log(List.A) // 0
  console.log(List.B) // 2
  console.log(List.C) // 3

// string
const hello : string = "liby";
console.log(hello);
// 数组泛类型
let arr : Array<number> = [1,2];
console.log("arr:",arr);

// void 表示方法返回类型
// 表示 该方法没有返回值
function doHaveReturn () :void {
    alert("~~~");
}

// 
let x3 : number | null | undefined;
x3 = 1;// 运行正确
x3 = null;// 运行正确
x3 = undefined;// 运行正确
console.log("x3:",x3);

let xn: never;
let yn: number;

// 运行错误，数字类型不能转为 never 类型
// xn = 123;

// 运行正确，never 类型可以赋值给 never类型
// xn = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
// yn = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}


/* type object  */ 

var num = new Number(7.123456);
num.toExponential();//把对象的值转换为指数计数法 1.2253e+3
num.toFixed();//把数字转换为字符串，并对小数点指定位数 (2)小数点后二位
num.toLocaleString();//把数字转换为字符串，使用本地数字格式顺序
num.toPrecision();//把数字格式化为指定的长度 (1)7 (2)7.1
num.toString();//()里面是进制  把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10
num.valueOf();//返回一个 Number 对象的原始数字值

Number.MAX_VALUE;
// Number.MIN_SAFE_INTEGER;
Number.toString();
Number.constructor;
Number.prototype;
Number.NaN;


var str = new String("Hello World");
str.length;
str.constructor();
// str.strike();
str.charAt(0);//指定位置的字符
str.charCodeAt(1);//指定的位置的字符的 Unicode 编码

str.concat("sdf");//连接两个或更多字符串，并返回新的字符串
str.indexOf("ll");//某个指定的字符串值在字符串中首次出现的位置
str.lastIndexOf("e");//从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置
str.localeCompare("Hello World");//用本地特定的顺序来比较两个字符串 same 0 different 1

/* 正则 */ 
// 查找找到一个或多个正则表达式的匹配
str.match(/or/g);
// 替换与正则表达式匹配的子串
var re = /(\w+)\s(\w+)/; 
var str12 = "zara Zali"; 
var newstr = str12.replace(re, "$2, $1"); 
console.log(newstr); // ali, zara
// 检索与正则表达式相匹配的值
str12.search(/za/gi);//-1 没有匹配的

/* 截取*/ 
str.slice();//返回被提取的部分
str.split(" ",3);//返回 字符串数组 用“ ”分 里面有三项
str.substr(1,2);//从起始索引号提取字符串中指定数目的字符
str.substring(4);//返回 两个指定的索引号之间 string,（4）从0开始算第四个（不要四）
var sre45 = "ASDF SDF";
// 据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
sre45.toLocaleLowerCase();
sre45.toLocaleUpperCase();
// 把字符串转换为 小/大 写
sre45.toLowerCase();
sre45.toUpperCase();
// other
sre45.toString();
sre45.valueOf();

/* TypeScript Array(数组) */ 
var arr_string : string [];
arr_string = ["1","asf","saf"];

var arr_liby : number [] = [1, 2, 3];

var arr_object : number[] = new Array(4);// (4) //("Google", "Runoob", "Taobao", "Facebook")
for (let oi = 0; oi < arr_object.length; oi++) {
  const element = arr_object[oi] = oi * 2 
  console.log(`element: ${element}`);  
}
// 数组解构
var arr_deconstruct : number[] = [12, 14];
var [xd, yd] = arr_deconstruct;

// 数组迭代
var j_iteration : any;
var arr_iteration : number [] = [12,23,23];

for(j_iteration in arr_iteration) {
  arr_iteration[j_iteration];
}

// 多维数组
var  n_arr : number[][] = [[1,5,6],[22,12,12]];
console.log(`n_arr: ${n_arr}`);

// 作为函数的返回值
function disp() : string[] {
  return new Array("dsf","sdf","gh");
}
var site : string[] = disp();

for (let i_site in site) {
  console.log(`disp${site[i_site]}`);  
}
/* 数组方法 */ 
var alpha = ["a", "b", "c"]; 
var numeric = ["1", "2", "3"];

alpha.concat(numeric);//返回一个数组
alpha.every((element, index, array)=>{
// 测数值元素的每个元素是否都符合条件——最后得到了一个boolean
  return (parseInt(element) >= 10);
})
// 检测数值元素，并返回符合条件所有元素的数组 —— 得到array 
alpha.filter((element, index, array) => {
  return (parseInt(element) >= 10);
})
// 数组每个元素都执行一次回调函数
alpha.forEach((ele) => {
  console.log(ele);
  
})
// 搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项
var index_arr = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index_arr );  // 2

// 把数组的所有元素放入一个字符串
var arr1 = new Array("First","Second","Third"); 
          
var str1 = arr.join(); 
console.log("str : " + str1 );  // First,Second,Third 
          
var str2 = arr.join(", "); 
console.log("str : " + str2 );  // First, Second, Third
          
var str3 = arr.join(" + "); 
console.log("str : " + str3 );  // First + Second + Third
// numbers.map(Math.sqrt); 
// [12, 5, 8, 130, 44].lastIndexOf(44); //4 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索

// [1, 4, 9].pop(); // 9删除数组的最后一个元素并返回删除的元素
// [10, 1, 2, 3].shift(); 删除并返回数组的第一个元素
// [].unshift();向数组的开头添加一个或更多元素，并返回新的长度

// [].psuh();

// 将数组元素计算为一个值   （ 从左到右）
var total = [0, 1, 2, 3].reduce(function(a, b){
   return a + b; 
  }); 
console.log("total is : " + total ); 
// 将数组元素计算为一个值    （从右到左）
var total = [0, 1, 2, 3].reduceRight(function(a, b){
   return a + b;
  }); 
console.log("total is : " + total ); 
// [0, 1, 2, 3].reverse(); 反转数组的元素顺序

// ["orange", "mango", "banana", "sugar", "tea"].slice( 1, 2); // mango
// ["orange", "mango", "banana", "sugar", "tea"].slice( 1, 3);// mango,banana

// 检测数组元素中是否有元素符合指定条件 —— 得到boolean的结果
[2, 5, 8, 1, 4].some( (element, index, array) => {
  return (element >= 10); //有符合条件的就行
})

var arr34 = new Array("orange", "mango", "banana", "sugar"); 
var sorted = arr34.sort(); //对数组的元素进行排序

/* 从数组中添加或删除元素 */ 
var arr5 = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr5.splice(2, 0, "water"); //water 加到 banana
removed = arr5.splice(3, 1); //delete banana 

// 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值
var strval : number | string;
function dispchoose ( name:string | string[] ){
  if( typeof name === "string" ){

  }else {
    let i;
                for (i = 0; i < name.length; i++) {
                console.log(name[i]);
                }
  }
}

var arr_unit : number[] | string[];
var arr_int = [1,2,3];







/* prototype 实例 */
function protoliby (gvb:string, koi:number) {
  this.id;
  this.name;
} 

protoliby.prototype.email = "lij@132.com";

var ksdjdsj = new protoliby("sdf",21);
console.log("email:",ksdjdsj.email);
