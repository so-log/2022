interface IPerson {
    name : string
    age : number
}
let good: IPerson = {name: 'Jack', age: 32}

/* 인터페이스 조건 불일치
let bad1: IPerson ={name: 'so'}
let bad2: IPerson ={age: 22}
let bad3: IPerson ={}
let bad4: IPerson ={name: 'so', age:22, ect: true}
*/