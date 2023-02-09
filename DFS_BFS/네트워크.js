//네트워크/bfs/success
function solution(n, computers) {
    let answer = 0;
    let visited = new Array(n).fill(false)
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            queue.push(i)
            answer++;
            while (queue.length > 0) {
            let point = queue.shift()
                for (let j = 0; j < n; j++) {
                    if(point!==j&&!visited[j]&&computers[point][j]===1){
                        queue.push(j)
                        visited[j]=true
                    }
                }
            }
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
// let arr;
// let visitArr;
//
// function solution(n, computers) {
//     let ctr = 0;
//     arr = computers;
//     visitArr = new Array(n).fill(false);
//
//     for(let i in arr) {
//         ctr += dfs(i);
//     }
//
//     return ctr;
// }
//
// function dfs(i) {
//     if(visitArr[i] == true) return 0;
//     else visitArr[i] = true;
//
//     for(let j in arr[i]) {
//         if(arr[i][j] == 1)
//             dfs(j);
//     }
//
//     return 1;
// }