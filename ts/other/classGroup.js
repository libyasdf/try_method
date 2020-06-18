// TypeScript 是面向对象的 JavaScript
// 类描述了所创建的对象  共同的属性 和 方法
// TypeScript 支持面向对象的所有特性，比如 类、接口等
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类可以包含以下几个模块（类的数据成员）：
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作。
var CarT = /** @class */ (function () {
    // 构造函数 
    function CarT(engine) {
        this.engine = engine; //this.engine 表示类的字段
    }
    // 方法 
    CarT.prototype.disp = function () {
        console.log("发动机为 :   " + this.engine);
    };
    return CarT;
}());
// 创建一个对象
var obj66 = new CarT("XXSY1");
// 访问字段
console.log("读取发动机型号 :  " + obj66.engine);
// 访问方法
obj66.disp();
// 类的继承
// TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类
// 子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承
// TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj4 = new Circle(223);
obj4.disp();
//  子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); // 多重继承，继承了 Child 和 Root 类
var obj78 = new Leaf();
obj78.strRoot = "hello";
console.log(obj78.strRoot);
/* 继承类的方法重写 */
// 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写
// 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
/* static 关键字用于定义类的数据成员（属性和方法）为静态的 */
//  静态成员可以直接「通过类名」调用
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num（static） 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
/* instanceof 运算符 */
// 判断对象是否是指定的类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj34 = new Person();
var isPerson = obj34 instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
// * 访问控制修饰符 */
// 来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。
// private : 私有，只能被其定义所在的类访问。
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj00 = new Encapsulate();
console.log(obj00.str1); // 可访问 
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj33 = new AgriLoan(10, 1);
console.log("利润为 : " + obj33.interest + "，抽成为 : " + obj33.rebate);
