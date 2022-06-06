//논리연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온 것)
// !! 불리언값으로 변환(단한 연산자 응용버전)

let num = 8;
if(num>=0 && num<9){
    console.log('👍');
}

if(num!=9){
    console.log('🙏');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text'); //문자열은 true니까 true의 부정은 false
console.log(!!'text'); // 문자열을 boolean값으로 변환한 것곽 같음