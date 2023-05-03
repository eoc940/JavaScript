const zeroCho = {
    name: 'zero',
    year: 1994,
    gender: 'male',
}

console.log(zeroCho.name);
console.log(zeroCho.year);
console.log(zeroCho.gender);

// 배열과 함수가 객체인 이유
function hello() {}
hello.a = 'really?';
const array = [];
array.b = 'wow';
console.log(hello.a);
console.log(array.b);
console.log(hello)
console.log(array)

// 객체 간의 비교
console.log({} === {}) // false 이다
const arr = [1, 2, 3];
console.log(arr === [1,2,3]) // 다른 객체이기 때문에 false 이다
