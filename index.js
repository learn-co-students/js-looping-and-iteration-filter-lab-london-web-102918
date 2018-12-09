

function findMatching(drivers, string) {
    const filteredDrivers = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())

    return filteredDrivers
}

function fuzzyMatch(drivers, string) {
    const filteredDrivers = drivers.filter(driver => driver.startsWith(string))

    return filteredDrivers
}

function matchName(drivers, string) {
    const filteredDrivers = drivers.filter(driver => driver['name'] === string)

    return filteredDrivers
}
