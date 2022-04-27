let part1 = {name: 'jane'}, part2 = {age: 22}, part3 = {city: 'Seoul'};
let merged = {...part1, ...part2, ...part3} // 비구조화 할당문이 아닌곳에서, 전개 연산자
console.log(merged)