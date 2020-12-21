function Human(name){
    this.name = name;
}

Human.prototype.salute = function(){
    console.log(`Hi my name is ${this.name}`);
}

const derick = new Human(`Derick`);
derick.salute()

let prototypeofderick = Object.getPrototypeOf(derick);
console.log(prototypeofderick);

let prototypeofprototypeofderick = Object.getPrototypeOf(prototypeofderick);
console.log(prototypeofprototypeofderick);

let prototiposdeprototypeofderick = prototypeofprototypeofderick.prototype;
console.log(Human.prototype);