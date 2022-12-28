// 연산자
let num = 10 % 3;  //나머지 값을  구함
console.log(num); 

let num1 = 2**3;  //제곱근 값을 구함
console.log(num); 

let num2 = 1  //단항 산술연잔자 
//전치 : ~하기 전에 ex) ++num
//후치 ; ~ 후에 ex) num++
num2= ++num2;
console.log(num2);

let num3 = -1;  //단항 부정 연산자
num3 = -num3;
console.log(num3); 

let num4 = 10;  //복합 대입 연산자
num4 += 2; // num = num + 2
console.log(num4); 

let num5 = 10; //비교 연산자
let num6 = 20;
let result = num5 < num6 ;
console.log(result);

let num7 = 10; //일치 연산자
let StrNum = '10';
let result1 = num7 === StrNum;
console.log(result1);

//논리 연산자 &&(and) ||(or) !(부정연산자)

let result3 = true && true; //둘다 참이여야 한다
console.log(result3);

let result4 = true || false; //돌중에 하나만 참이면 된다 
console.log(result3);

let result5 = !(false || false); //부정 연산자는 부정이 적용됨 
console.log(result5);

//삼항 연산자 ? :
let result6 = 10 < 20 ? '참입니다' : '거짓입니다.' ; //참이면 물음표 앞의 값을 출력함
console.log(result6); 

