
let arrayAnalysis = array => {
    let object = {};

    let arrayLength = array.length;
    let total = 0;
    
    for (let i =0; i < array.length; i++ ) {
        total += array[i];
    }

    let average = total / arrayLength;

    let max = Math.max(...array);
    let min = Math.min(...array);

    object = {
        average: average,
        min: min,
        max: max,
        length: arrayLength
    }

    return object
}



module.exports = arrayAnalysis;