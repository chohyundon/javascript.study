//함수 스코프
let a = 10; //전역 스코프
function sum (){
    // let a = 10; //지역 스코프
    console.log(`함수 내부에서 a 참조 : ${a}`);
}
sum();
console.log(`함수 내부에서 a 참조 : ${a}`); 

//지역 스코프는 함수내부는 할당이 되지만 외부는 불가능하다
//전역 스코프는 내부 외부 둘다 상관없다
//오직 let,const만 스코프 적용이 된다

//함수 호이스팅 : 선언문을 최상위로 끌어 올림
printName();
function printName(){
    console.log(`donny`)
}

//함수 표현식은 호이스팅이 적용되지 않는다
