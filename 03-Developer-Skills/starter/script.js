/*
// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1
We work for a company building a smart home thermometer. Our most recent task is this: 
"Given an array of temperatures of one day, calculate the temperature amplitude. 
Keep in mind that somethimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
//- How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temp

// 1) Understanging the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2);
    
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);


const messureKelvin = function() {
    const measurement = {
        temp: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius')
    };
    const kelvin = Number(measurement.value) + 273;
    console.table(measurement);.
    return kelvin;
}
console.log(messureKelvin()); 
*/
const printForecast = function(arr1) {
    let str = '';
    let day = 1;
    for (let i = 0; i < arr1.length; i++) {
        str += '... ' + arr1[i] + '°C in ' + day + 'days '
        ++day
    }
    console.log(str);
}

printForecast([12, 5, 2 ,41 ,2])