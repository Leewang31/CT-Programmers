//단어 변환/bfs/success
/*
* target이 words안에 있어야 한다
* queue에 begin을 담는다
*
* queue가 값이 있는 경우 반복한다
* queue를 shift하고  value에 저장한다
* value에서 한글자만 변환하여 만들수 있는 글자만 queue에 담는다 ->strA와 strB를 비교해 하나 차이인경우 true 아닌 경우 false
* 만약 글자가 begin이랑 같은 경우 retuen
*
* */
function solution(begin, target, words) {
    const visited = {[begin]: 0};
    const queue = [begin];
    while(queue.length>0){
        let str = queue.shift()
        for (const word of words) {
            if (isCorrected(str, word) && !visited[word]) {
                visited[word] = visited[str]+1
                queue.push(word)
            }
        }

    }
    return visited[target]?visited[target]:0
}
const isCorrected = (strA,strB)=>{
    let count =0;
    for (let i = 0; i < strA.length; i++) {
        strA[i]===strB[i] && count++
    }
    return count === strA.length - 1
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))