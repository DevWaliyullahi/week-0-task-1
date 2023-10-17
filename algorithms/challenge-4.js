function findSmallest(num1, num2, num3) {
    small = Math.min(num1, num2, num3);
    return small;
}
console.log(findSmallest(10, 12, 15));
module.exports = findSmallest;
