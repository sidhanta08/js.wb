/*
- objects are super important for grouping the data and functionalities . so we can do a lot of things in object of js
- object  are constructed in key and value pair .
- let mycars={ name of the object
    bmw:"xm"
    audi:"q7"
}
*/
const jsuser={
    name:"sidhanta",
    email:"sidhantakp2018@gmail.com",
    age:22,
    location:"odisha",
    isloggedin:"false",
    lastloggedindys:["monday","wednesday","friday"]
}
console.log(jsuser.name);

jsuser.email="sjskumarakp@gmail.com";
Object.freeze(jsuser);
jsuser.email="sidhanta@gmail.com";
console.log(jsuser.email);
jsuser.greeting=function(){
    console.log("hello future winner");
}
console.log(jsuser.greeting());
