const findTheOldest = function(people) {
    let yearsLived = people.reduce((oldest, curr) => {
        let oldOldest = getAge(oldest);
        let newOldest= getAge(curr);
        return newOldest > oldOldest ? curr : oldest; 
    }, people[0]);
    
    function getAge(person){
        if(person.yearOfDeath === undefined) {
            let curr = new Date().getFullYear();
            return curr - person.yearOfBirth;
             
        }
        else
            return person.yearOfDeath - person.yearOfBirth;
        
    }
    return  yearsLived;
}

// Do not edit below this line
module.exports = findTheOldest;
