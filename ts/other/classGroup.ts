// TypeScript 是面向对象的 JavaScript
// 类描述了所创建的对象  共同的属性 和 方法
// TypeScript 支持面向对象的所有特性，比如 类、接口等

// 类可以包含以下几个模块（类的数据成员）：
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作。
class CarT {
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { //this 关键字表示当前类实例化的对象。注意构造函数的参数名与字段名相同
        this.engine = engine //this.engine 表示类的字段
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}

// 创建一个对象
var obj66 = new CarT("XXSY1")
 
// 访问字段
console.log("读取发动机型号 :  "+obj66.engine)  
 
// 访问方法
obj66.disp();


// 类的继承
// TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类
// 子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承
// TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）

class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
  
 class Circle extends Shape { 
    disp():void { 
       console.log("圆的面积:  "+this.Area) 
    } 
 }
   
 var obj4 = new Circle(223); 
 obj4.disp()

//  子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承

 class Root { 
    strRoot:string; 
 } 
  
 class Child extends Root {} 
 class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
  
 var obj78 = new Leaf(); 
 obj78.strRoot ="hello"; 
 console.log(obj78.strRoot);


/* 继承类的方法重写 */  
// 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写
// 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法

class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }


/* static 关键字用于定义类的数据成员（属性和方法）为静态的 */  
//  静态成员可以直接「通过类名」调用
class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("num（static） 值为 "+ StaticMem.num) 
    } 
 } 
  
 StaticMem.num = 12     // 初始化静态变量
 StaticMem.disp()       // 调用静态方法

/* instanceof 运算符 */ 
// 判断对象是否是指定的类型
class Person{ } 
var obj34 = new Person() 
var isPerson = obj34 instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);


// * 访问控制修饰符 */
// 来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。
// private : 私有，只能被其定义所在的类访问。

class Encapsulate { 
    str1:string = "hello" 
    private str2:string = "world" 
 }
  
 var obj00 = new Encapsulate() 
 console.log(obj00.str1)     // 可访问 
//  console.log(obj.str2)   // 编译错误， str2 是私有的

// 类和接口

interface ILoan { 
    // interest:number 
 } 
  
 class AgriLoan implements ILoan { //并将 interest 字段作为类的属性使用
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
  
 var obj33 = new AgriLoan(10,1) 
 console.log("利润为 : "+obj33.interest+"，抽成为 : "+obj33.rebate );


// 对象也可以作为一个参数传递给函数

 var sites = { 
    site1:"Runoob", 
    site2:"Google",
}; 
var invokesites = function(obj: { site1:string, site2 :string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
} 
invokesites(sites)


// 鸭子类型(Duck Typing)

// 动态类型的一种风格，是多态(polymorphism)的一种形式

interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1});
 
// 错误 
// var newPoint2 = addPoints({x:1},{x:4,y:3})
