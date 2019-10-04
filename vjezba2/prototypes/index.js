class Animal {
	constructor(name) {
		this._name= name;
		this._begavior= 0;
	}
	get name() {	return this._name; }
	get behavior() { return this._behavior; }
	incrementBehavior() { this._behavior++ }
	static generateName () {
                const names= ['Angel','Spike','Buffy','Willow','Tara'];
                const randomNumber=Math.floor(Math.random()*names.length);
                return names[randomNumber];
        }
}

class Cat extends Animal {
	constructor(name,usesLitter) {
		super(name);
		this._usesLitter= usesLitter;
	}
}

const dog= new Animal("Dog");
console.log(Animal.generateName());
