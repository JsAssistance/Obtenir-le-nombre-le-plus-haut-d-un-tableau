let array = [1, 2, 3, 4, 5, 6, 7, 64, 2000];

let largest = array.reduce(function (x, y) {
    return (x > y) ? x : y;
});

console.log(largest);
































// let array = [1, 2, 3, 4];

// let largest = array.reduce(function (x, y) {
//     return (x > y) ? x : y;
// });