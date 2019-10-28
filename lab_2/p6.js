let person= {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: ()=> { return 'Hello, there!'; },
    sayGoodBye: ()=> { return 'GoodBye!'; },
    myName() { return `My name is ${this.name}!`}
}
console.log(person.sayGoodBye());
console.log(person.myName());
