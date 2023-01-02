//표준 내장 객체
//string 객체
const str = 'abc';
console.log(str.length); //문자열 세기

const email = 'tsetnaver.com';
if(email.includes("@") === false){  //문자열이 포함되어있는지 확인
    console.log('@가 없습니다.')
};

const email1 = 'tset@naver.com';
console.log(email1.indexOf('t')); 

const txt = " hello  ";
console.log(txt.trim());    //공백제거

//Array객체 
const arr = ['a', 'b', 'c'];
arr.pop();
console.log(arr);

const arr1 = ['a', 'b', 'c'];
arr1.push('d');
console.log(arr1);

const arr2 = ['a', 'b', 'c'];
arr2.forEach(function (v){
    console.log(v);
});
console.log(arr2);

//날짜 date 객체
const date = new Date(2023,1,2,4,50,30);
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(dateFormat);

//수학연산 Math 객체
const random = Math.random();
console.log(random);

//0~20의 무작위 숫자 추출
const random1 = Math.random() *20 + 1;
console.log(Math.floor(random1));

//최솟값 난수 추출
function getMinMaxRandom(min, max){
    return Math.floor(Math.random() * (max-min)) +1 + min;
}
const maxRadnom = getMinMaxRandom(10,20);
console.log(maxRadnom);
