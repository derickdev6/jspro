console.log(`this ${this}`);

function whoIsThis(){

    return this;
}
console.log(`whoIsThis ${whoIsThis()}`);

function whoIsThisStrict(){
    "use strict";
    return this;
}
console.log(`whoIsThisStrict ${whoIsThisStrict()}`);
//THIS EN EL CONTEXTO DE UN OBJETO

const person = {
    name: `Derick`,

    salute: function(){
        console.log(`Hi i am ${this.name}`);
    }
}
person.salute();

 //THIS CUANDO SE SACA LA FUNCION DEL OBJETO

const action = person.salute;
action()

//THIS EN UNA CLASE

function Person (name){
    this.name = name;
}

Person.prototype.salute = function (){
    console.log(`Hi i am ${this.name}`);
}

const angela = new Person(`angela`);
angela.salute();