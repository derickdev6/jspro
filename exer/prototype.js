// const derick = {
//     name: `Derick`
// }
// const patrick = {
//     name: `Patrick`
// }

// derick.salute = function(){
//     console.log(`Hi I am ${this.name}`);
// }
// patrick.salute = function(){
//     console.log(`Hi I am ${this.name}`);
// }
//Crearemos para ser mas eficientes una funcion constructora, de donde instanciaremos nuestros humanos a cada variable
// function Human(name) {
//     const human = {
//         name: name
//     }

//     human.salute = function() {
//         console.log(`Hi, I am ${this.name}`);
//     };

//     return human
// }
// const derick = Human(`Derick`);
// const patrick = Human(`Patrick`);
// const nathan = Human(`Nathan`)

//Lo haremos aun mejor creando un objeto para reunir todos los metodos de los humanos, asi podemos definirlos de mejor manera en el constructor y hacrlo mas reutilizable
// const HumanMethods = {
//     salute: function(){
//         console.log(`Hi i am the human ${this.name}`);
//     }
// }

// function Human(name) {
//     const human = {
//         name: name
//     }

//     human.salute = HumanMethods.salute;

//     return human
// }
// const derick = Human(`Derick`);
// const patrick = Human(`Patrick`);
// const nathan = Human(`Nathan`)

//Usando object create lo que se hace es pasar las propiedades de un objeto a otro, pero se envian dentro del atributo proto, sin embargo pueden ser accedidas directamente desde el objeto


// const HumanMethods = {
//     salute: function(){
//         console.log(`Hi I am the human ${this.name}`);
//     }
// }

// function Human(name) {
//     const human = Object.create(HumanMethods)
//     human.name = name
//     return human
// }
// const derick = Human(`Derick`);
// const patrick = Human(`Patrick`);
// const nathan = Human(`Nathan`)

// let humanlist = []
// humanlist.push(derick);
// humanlist.push(patrick);
// humanlist.push(nathan);

// humanlist.forEach(human => {
//     human.salute();
// });

//Usando prototype para albergar funciones del objeto

// function Human(name) {
//     const human = Object.create(Human.prototype)
//     human.name = name
//     return human
// }
// Human.prototype.salute = function(){
//     console.log(`Hi I am a human, my name is ${this.name}`);
// }
// const derick = Human(`Derick`);
// const patrick = Human(`Patrick`);
// const nathan = Human(`Nathan`)

// let humanlist = []
// humanlist.push(derick);
// humanlist.push(patrick);
// humanlist.push(nathan);

// humanlist.forEach(human => {
//     human.salute();
// });

//Aqui lo que suceed es que al usar new, el object create se hace automaticamente y se saca del Human.protoype por default, lo lleva en vez de a human a "this" y el return this es intrinseco
function Human(name) {
    this.name = name
}
Human.prototype.salute = function(){
    console.log(`Hi I am a human, my name is ${this.name}`);
}
const derick = new Human(`Derick`);
const patrick = new Human(`Patrick`);
const nathan = new Human(`Nathan`)

let humanlist = []
humanlist.push(derick);
humanlist.push(patrick);
humanlist.push(nathan);

humanlist.forEach(human => {
    human.salute();
});