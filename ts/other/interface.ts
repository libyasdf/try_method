/* TypeScript 接口 */ 

// 接口是一系列抽象方法的声明，是一些方法特征的集合
// 这些方法都应该是抽象的，需要由具体的类去实现
// 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

interface IPPerson { //接口不能转换为 JavaScript。 它只是 TypeScript 的一部分
    firstname: string,
    lastname: string,
    sayHi: () => string
}

var customer : IPPerson = {
    firstname:"liby",
    lastname:"queen",
    sayHi: () : string => {return "peace"}
}

console.log("Customer 对象 ");
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHi());

/* 联合类型和接口 */ 
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
 
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());


/* 接口和数组 */ 

// 将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串

interface namelist { 
    [index:number]:string 
 } 
  
//  var list2:namelist = ["John",1,"Bran"]; //错误元素 1 不是 string 类型
 interface ages { 
    [index:string]:number 
 } 
  
 var agelist:ages; 
 agelist["John"] = 15   // 正确 
//  agelist[2] = "nine"   // 错误

/* 接口继承 */ 

// 接口可以通过其他接口来扩展自己。
// Typescript 允许接口继承多个接口。
// 继承使用关键字 extends

// 单继承实例
interface Person1 { 
    age:number 
 } 
  
 interface Musician extends Person1 { 
    instrument:string 
 } 
  
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("年龄:  "+drummer.age)
 console.log("喜欢的乐器:  "+drummer.instrument);

// 多继承实例
interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Children extends IParent1, IParent2 { } 
var Iobj:Children = { v1:12, v2:23} //
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2);
