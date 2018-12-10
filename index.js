// Code your solution in this file
function findMatching(drivers, name) {
  const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  return result
}
function fuzzyMatch(drivers, name) {
  const result = drivers.filter(driver => driver.startsWith(name))
  return result
}
function matchName(drivers, name) {
  const result = drivers.filter(driver => driver["name"] === name)
  return result
}
