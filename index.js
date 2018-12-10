// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, name) {
  let newDrivers = [];
  for(let i = 0; i < drivers.length; i++) {
    if(drivers[i].toLowerCase() === name.toLowerCase()) {
        newDrivers.push(drivers[i]);
    }
  }
  return newDrivers;
}

function fuzzyMatch (drivers, string) {
  const newDrivers = drivers.filter(driver => driver.startsWith(string));
  return newDrivers;
}

function matchName (drivers, string) {
  const newDrivers = drivers.filter(driver => driver['name'] == string);
  return newDrivers;
}
