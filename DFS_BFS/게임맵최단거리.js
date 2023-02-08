//게임 맵 최단거리
// 최단거리 dfs/bfs!
/*
1. 경기장을 넘어가는 경우와 벽으로 이동하느 경우는 막는다
2. 한번 지가 간적있는 경우 visited을 true로 하여 true인 타일도 못지나가게 합니다.
3. 각 타일로 도착한 경우의 최솟 값은 기억합니다.
 */
function solution(maps) {
    const mapCount = Array.from(Array(maps.length), () => new Array(maps[0].length).fill(null))
    const moveFunc =(row,col,point) =>{
        if(maps[col][row]===1){

        }
        if(mapCount[col][row] === null || mapCount[col][row]>point) {
            mapCount[col][row] = point
            if (row > 0) {
                moveFunc(row - 1, col, mapCount[col][row])
            }
            if (row + 1 < maps[0].length) {
                moveFunc(row + 1, col, mapCount[col][row])
            }
            if (col > 0 && col < map[0].length) {
                moveFunc(row, col - 1, mapCount[col][row])
            }
            if (col + 1 < map[0].length) {
                moveFunc(row, col + 1, mapCount[col][row])
            }
        }
    }
    moveFunc(0,0,0)

    return mapCount[maps.length-1][maps[0].length-1]
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))