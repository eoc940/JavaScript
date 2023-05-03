const fruits = ['apple', 'orange', 'pear']
console.log(fruits[2]);
console.log(fruits.length)

const target = [1,2,3,4];
target[4] = 5;
target[6] = 6; // 5번째 인덱스에는 empty item 으로 됨
console.log(target)

target.unshift(0); // 맨 앞에 추가
console.log(target);

target.push(7);
console.log(target)
target.pop()
console.log(target)
target.shift() // 맨 앞 제거
console.log(target)

target.splice(1, 1); // index 가 1인 곳부터 1개 지워짐
console.log(target);

target.splice(2, 0, 7);
console.log(target);

const result = target.includes(5);
console.log(result)



