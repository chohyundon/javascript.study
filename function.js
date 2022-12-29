//함수 선언문
function gugudan (){
    for (let i = 1; i <=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
gugudan();

//함수 표현식
const gugudanExpress = function gugudanExpress (){
        for (let k = 1; k <=9; k++){
            console.log(`3 * ${k} = ${3 * k}`);
    }
}
gugudanExpress();

//화살표 함수
const gugudanArrowFunction = () => {
    for (let i = 1; i <=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
};

gugudanArrowFunction();

//매개변수와 인수 
function gugudan (dan){             //dan은 매개변수로 외부의 데이터를 전달 받도록 정의하는 변수
    for (let i = 1; i <=9; i++){
        console.log(`dan * ${i} = ${dan * i}`);
    }
}
gugudan(3);    //3은 전달하고 싶은 데이터를 적은 것으로 인수라 함 

//return
function sum(num1,num2){
    const result = num1 + num2;
    console.log(result);
}
sum(10,20);

//return문 함수를 내부에서 외부로부터의 값을 반한할때 오류가 나는데 이를 방지해줌
//ex)
function sum(num1,num2) {
    let result = num1+num2;
    console.log(result);
}
sum(10,20);
console.log(result)

// 이러한 오류로 인해 reurn문 사용
function sum(num1,num2) {
    const result = num1+num2;
    return result;
}
const result1 = sum(10,20);
console.log(result1);