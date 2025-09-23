const palindromes = function (str) {
    let cleanstr =str.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '');
    let strRev = cleanstr.toLowerCase().split('').reverse().join('');
    return cleanstr === strRev;
};

// Do not edit below this line
module.exports = palindromes;
