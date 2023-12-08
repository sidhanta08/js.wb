/*
function addno(n1,n2){ //parameter 
    console.log(n1+n2)
}
addno(3,"a"); //argument
*/
/*
function addno1(n1,n2){
    let result=n1+n2;

}
const result=addno1(3,5);
console.log("result:", result);
*/
/*
function loginusermsg(username){
    return`${username} just loggedin 5 min before` 

}
console.log(loginusermsg("sidhanta "));
*/
/*
function calculate(...num1){ //...rest operater
    return num1;
}
console.log(calculate(222,333,444,555,666,777,888));
*/

const user={
    username:"gift",
    price:400

} 
function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user);

