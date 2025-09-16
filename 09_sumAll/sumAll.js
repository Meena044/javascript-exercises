const sumAll = function(start, end) {
    let sum = 0;
    if((Number.isInteger(start) && start > 0) && (Number.isInteger(end) && end > 0)){
        if(start <= end){
            for(let i=start; i<=end; i++){
                sum = sum + start;
                start +=1;
            }
        }
        else if(start >= end){
            for(let i=start; i>=end; i--){
                sum = sum + start;
                start -=1;
            }
        }
    }
    else {
        sum = "ERROR"
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
