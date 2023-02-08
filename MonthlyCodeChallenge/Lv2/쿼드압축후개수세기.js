//쿼드압축후개수세기/success
// 1. 한 점의 값을 기억하고, 상자를 탐색합니다.
// 2. 한점과 다른 수가 없다면 answer[한점]++
// 3. 아니라면 4등분하고 각 파틀를 1부터 다시 진행
function solution(arr) {
    const answer = [0, 0];
    const check = (row, col, n) => {
        let point = arr[col][row]
        let flag = true
        for (let i = col; i < col + n; i++) {
            if (flag) {
                for (let j = row; j < row + n; j++) {
                    if (point !== arr[i][j]) {
                        flag = false
                        break;
                    }
                }
            }
        }
        n /= 2
        if (flag) {
            answer[point] += 1
        } else {
            check(row, col, n)
            check(row + n, col, n)
            check(row, col + n, n)
            check(row + n, col + n, n)
        }
    }
    check(0, 0, arr.length)
    return answer;
}

console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]))