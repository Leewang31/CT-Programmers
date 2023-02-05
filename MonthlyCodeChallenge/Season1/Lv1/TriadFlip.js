//삼진법 뒤집기
function solution(n) {
    var answer = Number.parseInt(n.toString(3).split('').reverse().join(''),3)
    return answer
}

console.log(solution(45))