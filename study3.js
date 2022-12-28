//반복문
//while
// let num = 1 ;
// while(num <= 9999){
//     console.log(num);
//     num++;
// }

//do while  do while 문은 무조건 실행을 한번은 꼭하는 반목문이다.
let num1 = 1;
do {
    console.log('do');
}while(false);

//for (초기값, 조건식, 증감식)
for(let i= 0; i <= 5; i++ ){
    console.log(i);
}

//다중 for문
for(let i= 0; i <= 2; i++ ){
    console.log(`i:${i}`);
    for(let k = 0; k < 2; k++){
        console.log(`k:${k}`);    
    }
}

//배열  for 반목문
const arr = ['apple','banana','orange'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} 
//배열  do while 반목문
let i = 0 ;
const arr1 = ['apple','banana','orange'];
while(i< arr.length) {
    console.log(arr[i]);
    i++;
}

//fo in
let i1 = 0 ;
const arr2 = ['apple', 'banana','orange'];
const obj = {
    name : '철수',
    age : 20,
};
for(let key in obj) {
    console.log(obj[key]);
}

//break. continue
//break는 반목문을 멈추고 contiue는 반목문을 건너뛰어서 실행한다