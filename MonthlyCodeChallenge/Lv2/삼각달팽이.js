//삼각 달팽이/success
function solution(n) {
    var answer = [];
    for (let i = 0; i <n; i++) {
        answer.push(new Array(n).fill(0))
    }
    let row=-1, col=0;

    let curNum = 1;

    for(let i = n; i > 0; i-=3){
        for(let j = 0; j < i ; j++) {answer[++row][col] = curNum++;}
        for(let j = 0; j < i-1 ; j++) {answer[row][++col] = curNum++;}
        for(let j = 0; j < i-2 ; j++) {answer[--row][--col] = curNum++;}
    }
    return answer.flat().filter(el=>el!==0);
}

console.log(solution(5))