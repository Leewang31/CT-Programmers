//게임 맵 최단거리/bfs/success
// 최단거리 dfs/bfs!
/*
1. 경기장을 넘어가는 경우와 벽으로 이동하느 경우는 막는다
2. 한번 지가 간적있는 경우 visited을 true로 하여 true인 타일도 못지나가게 합니다.
3. 각 타일로 도착한 경우의 최솟 값은 기억합니다.
 */
function solution(maps) {
    let answer = 1;
    let visited = maps;
    let queue = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
    queue.push([0,0])
    visited[0][0]=0;
    while(queue.length>0){
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [x,y] = queue.shift()
            for (let j = 0; j <4; j++) {
                let nx = x+dx[j];
                let ny = y+dy[j];
                if(nx>=0&&ny>=0&&nx<n&&ny<m && visited[nx][ny]===1){
                    if(nx === n-1 && ny === m-1){
                        return answer+1
                    }
                    queue.push([nx,ny])
                    visited[nx][ny]=0
                }
            }
        }
        answer++
    }
    return -1
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))