// Code your solution in this file
function findMatching(drivers, name) {
const chosenName = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
      return chosenName
    }

function fuzzyMatch(drivers, name) {
  const check = drivers.filter(driver => driver.startsWith(name))
  return check
}

function matchName(drivers, name) {
  const checkName = drivers.filter(driver => driver["name"] === name)
  return checkName
}
