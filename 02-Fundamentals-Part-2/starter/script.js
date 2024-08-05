/*const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', '2037 - 1991', 'teacher', friends];

console.log(jonas);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')){
    console.log('You have a friend called Steven');
}

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips  =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);


console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

let interestedIn = prompt('What do you want to knows about Jonas? Choose between fistName, lastName, age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['Twitter'] = '@jonassschmedtman'

console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
//console.log(`${jonas.firstName} has ${jonas.friends.length}, and hist best friend is called ${jonas.friends[0]}`);



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`
    }
}
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(jonas.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

john.calcBMI();
mark.calcBMI();

// John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!
console.log(`${mark.fullName}'s BMI (${mark.bmi}) is ${mark.bmi > john.bmi ? 'higher' : 'lower'} than ${john.fullName}'s (${john.bmi})`);


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for(let i = 0; i <= 10; ++i) {
    if (jonasArray[i] === undefined) {
        console.log(`Jonas ${i} does not exist`);
    }else{
        console.log(jonasArray[i], typeof(jonasArray[i]));
        types.push(typeof(jonasArray[i]));
    }
}

console.log(types);

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];
for (let i = jonas.length; i >= 0; --i) {
    if (jonas[i] === undefined) continue;
    console.log(jonas[i]);
}

for (let ex = 1; ex < 4; ++ex) {
    console.log(`-------- Starting Exercise ${ex}`)
    
    for (let i = 1; i < 6; ++i) {
        console.log(`Exercice ${ex}: Lifting weight repetition ${i}`);
    }
}

for (let i = 1; i <=  10; ++i) {
    console.log(`Lifting weight repetition ${i}`);
}


let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++
}
*/
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; ++i) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(calcTip(bills[i]));
}