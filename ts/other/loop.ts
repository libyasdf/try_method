var i:any;
var n:any = "abc";

for ( i in n) {
    console.log(n[i]);    
}

let someArray = [1, "string", false];

for (let entery of someArray) {
    console.log(entery);
    
}

let list = [4, 5, 6];

list.every((val, index, arr) => {
    console.log(`every:${val}--${index}--${arr}`);
    return true;//区别于forEach
    
})

list.forEach((val, index, arr) => {
    console.log(`foreach:${val}--${index}--${arr}`);
    
})

var numco : number = 0;
var count : number = 0;
for ( numco = 0; numco < 20; numco++) {
    if (numco%2 === 0) {
        continue;
    }
    count++;    
}
console.log(`count:${count}`);
