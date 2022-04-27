abstract class AbstractPerson5{
    abstract name: string
    constructor(public age?: number){}  // 생성자 안에 왜 name 안씀?
}
class Person5 extends AbstractPerson5 {
    constructor(public name:string, public age?: number){   // 여긴 또 왜 name??
        super(age)
    }
}
let jack5 : Person5 = new Person5('Jack', 32)
console.log(jack5)