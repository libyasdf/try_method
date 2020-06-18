var i;
var n = "abc";
for (i in n) {
    console.log(n[i]);
}
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entery = someArray_1[_i];
    console.log(entery);
}
var list = [4, 5, 6];
list.every(function (val, index, arr) {
    console.log("every:" + val + "--" + index + "--" + arr);
    return true; //区别于forEach
});
list.forEach(function (val, index, arr) {
    console.log("foreach:" + val + "--" + index + "--" + arr);
});
var numco = 0;
var count = 0;
for (numco = 0; numco < 20; numco++) {
    if (numco % 2 === 0) {
        continue;
    }
    count++;
}
console.log("count:" + count);
