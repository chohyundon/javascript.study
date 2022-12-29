//매개변수로 가장 큰 수를 찾음
function getOrder(arr){
    let result = 0;
    for(let i =0; i< arr.length; i++){
        const currentNumber  =arr[i];
        if(result < currentNumber){
            result = currentNumber
        }
    }
    return result;
}
const result = getOrder([10,20,100,30,40]);
console.log(result)