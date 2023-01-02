//객체 : 키와 값으로 구성된 속성의 집합
const person = {
    name : 'hyundon',
    age : 20,
    "phone number" : "010-1234-5678",
    printinfo: function (msg) {
        console.log(msg);   //객체에서 함수는 메서드라고 부름
    }
};
person.name="철수"
console.log(person.name);   //마침표 연산자
console.log(person['age']); //대괄호 연산자
console.log(person['phone number']);
person.printinfo('hello');

//대괄호 연산자는 키 값이 공백이 있을 시 사용되어야 한다

//동적으로 객체 추가,삭제하기
const people= {
    age : 30,
};
people.name="유림";
people.age = 40;
 
delete people.age;
console.log(people.age);

//객체의 데이터 관리
const obj = {};
obj.name = '이름';
console.log(obj);

//원본 변수의 값을 변화 시켜도 변화하지 않으면 깊은 복사라고 한다
//서로의 영향을 주지 않는다
let num = 10;
let num2 = num;

num = 30;
console.log(num,num2);

//얕은 복사
const obj1 ={
    name : "철수"
};
const obj2 = obj1;

delete obj1.name;
console.log(obj1,obj2);