//폰켓몬/success
const solution = nums => {
    let answer = [...new Set(nums)],
        limit = nums.length / 2;

    return answer.length > limit ? limit : answer.length;
}

console.log(solution([3,1,2,3]))