function isLeapYear(year) {
    if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)  {
        return true;        
    } else {
        return false;
    }
}
console.log(isLeapYear(2000));
module.exports = isLeapYear;
