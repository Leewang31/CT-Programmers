//이진 변환 반복하기
// 1. 수의 0제거
// 2. 제거한후 숫자의 길이 이진변환
// 3. 1이 아닌 경우 1번으로 돌아감
function solution(s) {
    const answer = [0,0];
    const check =(str)=>{
        let lth = str.replaceAll('0','').length
        answer[0]+=1;
        answer[1]+=str.length-lth;
        if(lth !==1){
            check(lth.toString(2))
        }
    }
    check(s)
    return answer;
}

console.log(solution("01110"))