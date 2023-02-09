//완주하지 못한 선수/success
const solution = (participant, completion)=> {
    let answer = '';
    let maps = new Map()
    for (const el of participant) {
        if(!maps.get(el)){
            maps.set(el,1)
        }else{
            maps.set(el,maps.get(el)+1)
        }
    }
    for (const el of completion) {
        maps.delete(el)
    }
    for (const [key, value] of maps) {
        return key
    }

}
console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]))