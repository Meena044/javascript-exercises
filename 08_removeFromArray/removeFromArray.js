const removeFromArray = function(arr, remove) {
    // let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]===remove)
            arr.splice(i, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

// i=0 0<3 arr[0]= "hey", "hey"==="hey"