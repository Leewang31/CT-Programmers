//아이템 줍기/fail
function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = 0;
    let maps = new Array(20).fill(0).map(() => new Array(20).fill(undefined));
    let dx = [-1, 1, 0, 0]
    let dy = [0, 0, -1, 1]
    const area = (arr) => {
        const [x1, y1, x2, y2] = arr
        for (let i = y1; i <= y2 + 1; i++) {
            maps[i][x1] = 1;
            maps[i][x2 + 1] = 1;
        }
        for (let i = x1; i <= x2 + 1; i++) {
            maps[y1][i] = 1;
            maps[y2 + 1][i] = 1;
        }
    }
    for (let i = 0; i < rectangle.length; i++) {
        area(rectangle[i])
    }
    let queue = [[characterX, characterY]]

    maps[characterY][characterY] = 0;
    while (queue.length > 0) {
        let [pointX, pointY] = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = dx[i] + pointX
            let ny = dy[i] + pointY
            if(nx>=0 && ny>=0 && nx<=11 && ny <=11 && maps[ny][nx] !==undefined ){
                if(maps[ny][nx] === 1){
                queue.push([nx,ny])
                    maps[ny][nx] = maps[pointY][pointX] +1
                }
                if(nx===itemX && ny ===itemY){
                    maps[ny][nx] = Math.min(maps[ny][nx],maps[pointY][pointX] +1)
                }
            }
        }
    }
    console.log(maps)
    return maps[itemY][itemX];
}

console.log(solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8))