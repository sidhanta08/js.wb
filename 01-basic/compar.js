console.log(2>1)
console.log(2>=19)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
console.log("2">1)
console.log("02">1)
console.log(null<0);
console.log(null==0);
console.log(null<=0);
console.log(undefined==0);
console.log(undefined>0);






//the reson that is an equality check== and comparision > < >= <= work differently.
//the comparision convert null to a number , treating as 0 , thats why(3)null >= 0 is true and (1) null >0 is false


/*in our jstherre are 2 types of variables 
premitive -string,number,biging,symbol,null,boolean,undefined
non-premitive-array,object,function