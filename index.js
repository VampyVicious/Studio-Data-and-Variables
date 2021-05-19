// FORK this starter file and save it to your own Repl.it account.
 

// Declare and initialize the 12 variables here:


/* 
Bonus extra credit thing that Im stuck onnnNnNnNnNnnN (keeps giving me an error for not being able to find readline-sync)

const input = require('readline-sync');
let astronautCount = input.question("What is the astronaut count? ");
console.log("What is the astronaut count? " + astronautCount);
*/

let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1;
let weatherStatus = 'clear';


// Write code to generate the LC04 report here:


let line = '-------------------------------------';
console.log(line + '\n> LC04 - LAUNCH CHECKLIST' + '\n'+ line);
console.log('Date: ' + date);
console.log('Time: ' + time );
console.log('\n' + line);
console.log('> ASTRONAUT INFO' + '\n' + line);
console.log('* count: ' + astronautCount);
console.log('* status: ' + astronautStatus);
console.log('\n' + line);
console.log('> FUEL DATA' + '\n' + line);
console.log('* Fuel temp celsius: ' +  fuelTempCelsius + ' C');
console.log('* Fuel level: 100%');
console.log('\n' + line);
console.log('> MASS DATA' + '\n' + line);
console.log('* Crew mass: ' + crewMassKg + ' kg');
console.log('* Fuel mass: ' + fuelMassKg + ' kg');
console.log('* Shuttle mass: ' + shuttleMassKg + ' kg');
console.log('* Total mass: ' + totalMassKg + ' kg');
console.log('\n' + line);
console.log('> FLIGHT PLAN' + '\n' + line);
console.log('* weather: ' + weatherStatus);
console.log('\n' + line);
console.log('> OVERALL STATUS' + '\n' + line);
console.log('* Clear for takeoff: YES');




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.