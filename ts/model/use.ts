import commonWay = require("./commonModel"); 
import son = require("./son"); 
// import triangle = require("./Triangle");  
 
function drawAllShapes(shapeToDraw: commonWay.IShape) {
   shapeToDraw.draw(); 
} 
 
drawAllShapes(new son.Circle()); 
// drawAllShapes(new triangle.Triangle());


// tsc --module amd TestShape.ts 