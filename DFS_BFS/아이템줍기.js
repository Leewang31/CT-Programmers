//아이템 줍기
function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = 0;
    let maps = new Array(20).fill(0).map(() => new Array(20).fill(0));
    const area = (arr)=>{
        const [x1,y1,x2,y2] = arr
        for (let i = y1; i <=y2 ; i++) {
            maps[i][x1]=1;
            maps[i][x2]=1;
        }
        for (let i = x1; i <=x2 ; i++) {
            maps[x1][i]=1;
            maps[x2][i]=1;
        }
    }
    for (let i = 0; i < rectangle.length; i++) {
        area(rectangle[i])
    }
    return maps;
}

console.log(solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8))