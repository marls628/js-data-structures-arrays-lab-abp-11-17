// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver(name) {
   drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name){
  drivers.pop("Bob");
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift("Ralph");
}

const copyOfDrivers = drivers.slice();

function appendDriver(name){
  drivers.slice();
}
