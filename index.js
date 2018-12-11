// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch(list, nameInput) {
  let lengthOfName = nameInput.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === nameInput;
  });
}

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

