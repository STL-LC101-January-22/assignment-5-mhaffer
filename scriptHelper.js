// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
missionTarget.innerHTML = `
                        <h2>Mission Destination</h2>
                        <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                        </ol>
                        <img src='${imageUrl}'>
                `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
        return;
    }  else if (validateInput(pilot) !== 'Not a Number' || validateInput(copilot) !== 'Not a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {//(validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number"){
        alert("Make sure to enter valid information for each field!");
        return;
} 

//define all variables

let fuelStatus = document.getElementById("fuelStatus");

let cargoStatus = document.getElementById("cargoStatus");

let launchStatus = document.getElementById("launchStatus");

let pilotStatus = document.getElementById("pilotStatus");
pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

let copilotStatus = document.getElementById("copilotStatus");
copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

fuelLevel = Number(fuelLevel);
cargoLevel = Number(cargoLevel);

    
let isReady = true;

if (fuelLevel < 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    isReady = false;
    
}else{
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

if(cargoLevel > 10000) {
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    isReady = false;

} else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
}

if (isReady) {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
} else {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
}


list.style.visibility = "visible";

}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let selectedPlanet = Math.floor(Math.random() * planets.length-1);
    return planets[selectedPlanet]; 
}
try{
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch (e){
    //doNothing
}












/*
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
    
 }
 
 function validateInput(testInput) {
     if(testInput === "" || testInput === null){
         return "Empty";
     }else if ((!isNaN(Number(testInput)))){
         return "Is a Number"
     }else {
         return "Not a Number" 
     }
 
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let button = document.getElementById("formSubmit");

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoMass = document.getElementById("cargoMass");

    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);
     
    if (validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "" || validateInput(cargoLevel) === ""){
        alert("All fields required");
        return;
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("Pilot and Co-Pilot must be words");
        return;
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Fuel and Cargo fields must be numbers");
        return;
    }
    
     let launchReady = true;

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchReady = false;
     } else {
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
    }
     
    if (cargoMass > 10000) {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        launchReady = false;
     } else {
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
    }
  
    if (launchReady === false) {
       launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    }
    else{
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    }

    list.style.visibility = "visible";
    }
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json();
     });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor((Math.random() * planets.length) );
    return planets[index];
 }



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


*/