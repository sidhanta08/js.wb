/*const myarr=["gift",1,true]
console.log(myarr[1]);
const mynewarr=(1,2,3,4)
console.log(mynewarr);*/
/*const myarr=[1,2,3,4,5,6];
console.log(myarr)
myarr.push(9);
console.log(myarr)
myarr.pop(5);
console.log(myarr);
myarr.unshift(0);
console.log(myarr);
myarr.shift();
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(2));
console.log(myarr);
const demoarr=myarr.join();
console.log(demoarr);
console.log(typeof demoarr);*/
const cars=["maruti","alto","xuv","wagnor"]
const supercars=["bmw","audi","defender"]
cars.push(supercars);
const allnewcars=[...cars,...supercars];
console.log(allnewcars);
const anarr=[1,2,3,[4,5,6],7,[6,7,[4,5,[6,3,[9,10]]]]];
const realanarr=anarr.flat(Infinity);
console.log(realanarr);
// is aarray is a method to check wheather it is an array or not.
// from is a method in which we create that it autonomically creates an array

