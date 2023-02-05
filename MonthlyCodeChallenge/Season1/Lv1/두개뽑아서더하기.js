//두개뽑아서더하기
function solution(numbers) {
    var answer = [];

    numbers.forEach((el,idx)=>{
        for (let i = 0; i < numbers.length; i++) {
            if(idx !== i ){
                let sum = el+numbers[i]
                if(!answer.includes(sum)){
                    answer.push(sum)
                }
            }
        }
    })
    return answer.sort((a,b)=>a-b);
}

console.log(solution([2,1,3,4,1]))