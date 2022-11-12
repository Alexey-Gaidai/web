b = 5
a = 4
console.log(a + b);

function toHigh(str) {
    return str.toUpperCase();
}

function toLower(str) {
    return str.toLowerCase();
}

console.log(toHigh('Hello World'));
console.log(toLower('Hello World'));

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function pow(a, b) {
    return a ** b;
}

function mod(a, b) {
    return a % b;
}

console.log("Сложение", sum(b, a));
console.log("Вычитание", sub(b, a));
console.log("Умножение", mul(b, a));
console.log("Деление", div(b, a));
console.log("Возведение в степень", pow(b, a));
console.log("Остаток от деления", mod(b, a));

//создать массив и найти номер элемента чье значение наибольшее 
function findMax() {
    let a = [1,5,6,34,2,43]
    return Math.max.apply(null, a);
}

console.log('max: '+findMax());

//реализация функции, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа   
function getCodeStringFromText(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) + " ";
    }
    return result;
}

console.log(getCodeStringFromText("Hello World"));