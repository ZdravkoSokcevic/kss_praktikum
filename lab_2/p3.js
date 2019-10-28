let person= {
    name: 'Zdravko',
    age: 24
}

console.log(person.name);
console.log(person['age']);
person.age=25;

let person2= {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
}

let day= 'Tuesday';
let alarm;
(day==='Saturday'|| day==='Sunday')?alarm='weekendAlarm':alarm='weekAlarm';

console.log(person2[alarm]);