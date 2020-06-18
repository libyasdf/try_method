define(["require", "exports", "./son"], function (require, exports, son) {
    "use strict";
    exports.__esModule = true;
    // import triangle = require("./Triangle");  
    function drawAllShapes(shapeToDraw) {
        shapeToDraw.draw();
    }
    drawAllShapes(new son.Circle());
});
// drawAllShapes(new triangle.Triangle());
