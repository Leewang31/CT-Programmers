// 타겟넘버/success
// 1. 0인 result존재
// 2. numbers배열을 하나씩 실행하면 이를 num이라 한다
// 3a. result와 num를 더한다
// 3b. result와 num을 뺀다
// 4. 3을 반복하고 target과 일치하는 경우 count 를 올린다.
function solution(numbers, target) {
    let count = 0;
    const recursion =(idx, point) =>{
        if(idx === numbers.length){
            if(point === target){
                count ++;
            }
        }else{
            recursion(idx+1,point+numbers[idx])
            recursion(idx+1,point-numbers[idx])
        }
    }
    recursion(0,0)
    return count;
}

console.log(solution([4, 1, 2, 1],4))