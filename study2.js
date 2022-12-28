//조건문
let num = 3;
if(num % 2 === 0){
    //실행할 코드
    console.log('num은 짝수입니다');
} else{
    console.log('num은 홀수입니다');
}


//else if와 else는 단독으로 사용이 불가하다
//else if는 갯수 제한이 없지만 else는 한번만 사용이가능하다
let num1 = 10;
if(num1>20) {
    console.log('num은 20보다 큽니다')
} else if(num1>5){ 
    console.log('num은 5보다 큽니다')
} else {
    console.log('num은 5보다 작습니다')
}

// switch
let food = 'melon';
switch (food) {
    case 'melon':
        console.log('fruit');
        break;
    case 'apple':
        console.log('fruit');
    case 'carrot':
        console.log('vegetable');    
    default:
        console.log('아무것도 아니다');
        break;
}

//다중 if문 
let num2 = 10;
if(num2 % 2 ===0) {
    console.log('num2은 짝수입니다');
    if(num2 > 5) {
        console.log('num2은 5보다 큽니다')
    }
}