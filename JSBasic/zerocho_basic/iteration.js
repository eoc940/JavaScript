let i = 1;

while (i <= 5) {
    console.log('Hello while');
    i++;
}

for (let i = 0; i < 5; i++) {
    console.log('Hello For');
}

let j = 0;
while (true) {
    if (j === 5) break;
    j++;
}
console.log(j)

let k = 0;
while (k < 10) {
    k++;
    if (k % 2 === 0) {
        continue;
    }
    console.log(k);
}