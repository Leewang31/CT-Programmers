//위장/success
function solution(clothes) {
    let answer = 1;
    let maps = new Map();
    for (const el of clothes) {
        if(!maps.get(el[1])){
            maps.set(el[1],1)
        }
        if(maps.get(el[1])){
            maps.set(el[1],maps.get(el[1])+1)
        }
    }
    for (let [key,value] of maps) {
        answer *= value
    }
    return answer-1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))