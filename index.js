// Code your solution here
function findMatching(someArray, query) {
    return someArray.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
}
function fuzzyMatch(someArray, query){
    const driverFilter = someArray.filter(each => each.startsWith(query))
    if (driverFilter){
        return driverFilter;
    }
    return []
}

function matchName(someArray, query){
    const match = someArray.filter(each => each.name === query);
    return match
}