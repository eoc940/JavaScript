// 조건문
let condition = true;
if (condition) {
    console.log("Hello js")
}
if (!0) { // 0 은 false 다
    console.log("0 is false")
}

let value = 'F';
switch (value) {
    case 'A':
        console.log('A')
        break
    case 'B':
        console.log('B')
        break
    default:
        console.log("rest")
}