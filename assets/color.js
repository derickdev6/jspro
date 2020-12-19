function makeColorPrinter(color){
    let message = `The color is ${color}`;

    return `The colorito is ${color}`;
};

let greenprinter = makeColorPrinter(`green`);
console.log(greenprinter);