import commonWay = require("./commonModel");

export class Circle implements commonWay.IShape { 
    public draw() { 
       console.log("Cirlce is drawn (external module)"); 
    } 
 }