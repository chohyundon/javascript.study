// 숫자 1~999까지 짝수 갯수
let count = 0;
for(let i = 1; i <= 999; i++){
    if(i % 2 === 0) count++;
}
console.log(`짝수 개수는 ${count}개 입니다.`);