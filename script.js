const ac  = document.querySelector("#ac");
const display1 = document.querySelector(".display1");
const backspace = document.querySelector("#backspace");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

let str = "250";
let flag = 0;
display1.textContent = str;

ac.addEventListener("click", function(e) {
    str=""
    display1.textContent = str;
    flag = 0;
});

backspace.addEventListener("click", function(e) {
    if(flag == 1) {
        str = ""
        flag = 0;
    }
    else {
        str = str.slice(0, -1);
    }
    display1.textContent = str;
});

divide.addEventListener("click", function(e) {
    str = str + '/';
    display1.textContent = str;
    flag = 0;
});

seven.addEventListener("click", function(e) {
    if(flag == 1) {
        str="7"
        flag = 0;
    }
    else {
        str = str + '7';
    }
    display1.textContent = str;
});

eight.addEventListener("click", function(e) {
    if(flag == 1) {
        str="8"
        flag = 0;
    }
    else {
        str = str + '8';
    }
    display1.textContent = str;
});

nine.addEventListener("click", function(e) {
    if(flag == 1) {
        str="9"
        flag = 0;
    }
    else {
        str = str + '9';
    }
    display1.textContent = str;
});

multiply.addEventListener("click", function(e) {
    str = str + '*';
    display1.textContent = str;
    flag = 0;
});

four.addEventListener("click", function(e) {
    if(flag == 1) {
        str="4"
        flag = 0;
    }
    else {
        str = str + '4';
    }
    display1.textContent = str;
});

five.addEventListener("click", function(e) {
    if(flag == 1) {
        str="5"
        flag = 0;
    }
    else {
        str = str + '5';
    }
    display1.textContent = str;
});

six.addEventListener("click", function(e) {
    if(flag == 1) {
        str="6"
        flag = 0;
    }
    else {
        str = str + '6';
    }
    display1.textContent = str;
});

minus.addEventListener("click", function(e) {
    str = str + '-';
    display1.textContent = str;
    flag = 0;
});

one.addEventListener("click", function(e) {
    if(flag == 1) {
        str="1"
        flag = 0;
    }
    else {
        str = str + '1';
    }
    display1.textContent = str;
});

two.addEventListener("click", function(e) {
    if(flag == 1) {
        str="2"
        flag = 0;
    }
    else {
        str = str + '2';
    }
    display1.textContent = str;
});

three.addEventListener("click", function(e) {
    if(flag == 1) {
        str="3"
        flag = 0;
    }
    else {
        str = str + '3';
    }
    display1.textContent = str;
});

plus.addEventListener("click", function(e) {
    str = str + '+';
    display1.textContent = str;
    flag = 0;
});

zero.addEventListener("click", function(e) {
    if(flag == 1) {
        str="0"
        flag = 0;
    }
    else {
        str = str + '0';
    }
    display1.textContent = str;
});

decimal.addEventListener("click", function(e) {
    if(flag == 1) {
        str="."
        flag = 0;
    }
    else {
        str = str + '.';
    }
    display1.textContent = str;
});

equals.addEventListener("click", function(e) {
    str = eval(str);
    display1.textContent = str;
    flag = 1;
});