// Kreiranje klase sa konstruktorom
class Surgeon {
	constructor(name,department) {
		this._name=name;
		this._department=department;
		this._remainingVacationDays=20
	}
	get name() {	return this._name;	}
	get department() {	return this._department;	}
	get remainingVacationDays() {	return this._remainingVacationDays; }
	takeVacationDays(daysoff) { this._remainingVacationDays= this._remainingVacationDays - daysoff; }
}
const surgeorCurry= new Surgeon("Curry","Cardiovascular");
const surgeonDurant= new Surgeon("Durant","Orthopedice");

console.log(surgeorCurry.name);
surgeorCurry.takeVacationDays(3);
console.log(surgeorCurry.remainingVacationDays);



module.exports=Surgeon;
