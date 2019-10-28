let person= {
    _name: 'Lu Xun',
    _age: 37,
    set age(age) {
        if(typeof age=='number') {
            this._age=age;
        } else {
            console.warn('Invalid input');
            // console.log(console.memory);
            console.log('Invalid input');
            return 'Invalid input';
        }
    },
    get age() {
        console.log(`${this._name} is ${this._age} years old`);
        return this._age;
    }
}

person.age= 'Thirty-nine';
person._age=39;
console.log(person.age);