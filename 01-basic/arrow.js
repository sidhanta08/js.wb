/*
arrow function - in es6 major update had done .it changes the old syntax of function declaration and tried to reduce the length of a code .
- in arrow finction we need a variable to declare it and majorly used => this operator to define arrow function.
*/

const user = {
    username:"sid",
    location:"ctc",
    welcomemsg:function (){
        console.log(`${this.username},good morning`);
        console.log(this);

    }
}
user.welcomemsg();
user.username = "sidhu";
user.welcomemsg();
  


























































































