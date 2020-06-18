/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  

// 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());

// tsc --out app.js TestShape.ts  
// node app.js

// 嵌套命名空间

// Invoice.ts
namespace Runoob { 
    export namespace invoiceApp { 
       export class Invoice { 
          public calculateDiscount(price: number) { 
             return price * .40; 
          } 
       } 
    } 
 }

// InvoiceTest.ts 

// /// <reference path = "Invoice.ts" />
// 成员的访问使用点号 . 来实现
// var invoice = new Runoob.invoiceApp.Invoice(); 
// console.log(invoice.calculateDiscount(500));