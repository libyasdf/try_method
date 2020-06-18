class Site { 
    name():void { 
       console.log("Runoob") 
    } 
 } 
 var obj = new Site(); 
 obj.name();

// 1+2+````+n 
var sumNums = function(n: number): number {
   n && (n += sumNums(n - 1));
   return n;
};

//fjdaskbflajksbf
var sumNums = function(n: number): number {
   let ans: number = 0, A: number = n, B: number = n + 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   (B & 1) && (ans += A);
   A <<= 1;
   B >>= 1;

   return ans >> 1;
};