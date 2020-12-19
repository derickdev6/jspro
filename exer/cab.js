//Establecer un this usando call en la funcion
function salute(){
    console.log(`Hi I am ${this.name} ${this.lname}`);
}
const rick = {
    name: "Rick",
    lname: "Morty"
}
const edward = {
    name: "Edward",
    lname: "Kenway"
}
salute.call(rick)

function walk(meters, direction) {
    console.log(`${this.name} walks ${meters} meters towards ${direction}`);
}
walk.call(rick, 30, `south`);

//apply, need to send the function args as array

walk.apply(rick, [10, `north`])
//pasaondo los valores como un arreglo ya establecido
let values = [15, 'east'];
walk.apply(edward, values);

//bind, crea una nueva funcion con el this, pero no lo llama inmediatamente

let edwardsayhi = salute.bind(edward);
edwardsayhi();

const edwardwalks = walk.bind(edward);
edwardwalks(100, `east`)

const buttons = document.getElementsByClassName(`listbtn`);
// buttons.forEach(element => {
//     element.onclick = () => alert(`Never stop leveling`)
// });

Array.prototype.forEach.call(buttons, element => {
    element.onclick = () => alert(`Never stop leveling`)
});