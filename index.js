// Code your solution in this file

function findMatching(drivers,name) {
  return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

const fuzzyMatch = (drivers,letters) => {
  numberOfLetters = letters.length
  return drivers.filter(driver => driver.substr(0, numberOfLetters) == letters);
}

const matchName = (drivers,string) =>{
  return drivers.filter(driver => driver.name == string)
}
