// Write your helper functions here!
require('isomorphic-fetch');


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

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoMass = document.getElementById("cargoMass");
     
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields required");
    }

    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("Pilot and Co-Pilot must be words");
     }

     else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Fuel and Cargo fields must be numbers");
     }
     else {
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
     }
 
     if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch';
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById('launchStatus').style.color = 'rgb(199, 37, 78)';
    }

    else if (cargoMass > 10000) {
        list.style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass too heavy for launch';
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById('launchStatus').style.color = 'rgb(199, 37, 78)';
    }

    else if (fuelLevel > 10000 && cargoMass < 10000) {
        list.style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch';
        document.getElementById('launchStatus').innerHTML = 'Shuttle is Ready for Launch';
        document.getElementById('launchStatus').style.color = 'rgb(65, 159, 106)';
    }

    else (fuelLevel <= 10000 && cargoMass >= 10000) {
        list.style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass too heavy for launch';
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById('launchStatus').style.color = 'rgb(65, 159, 106)';
    }
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
