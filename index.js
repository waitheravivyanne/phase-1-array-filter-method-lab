// Code your solution here
const drivers = ['Bobby', 'Sammy' , 'Sally' , 'Annette' , 'Sarah' , 'Bobby']

function findMatching(name, drivers) {
    return name.filter(
      (matchingNames) => matchingNames.toLowerCase() === drivers.toLowerCase()
    );
}

function fuzzyMatch(name, firstLetter){
    return name.filter(
        matchingNames => matchingNames.toLowerCase().indexOf(firstLetter.toLowerCase()) === 0
    )
}

function matchName (person, propertiesByName) {
    return person.filter(
        details => details.name === propertiesByName
    )
}