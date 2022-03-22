console.log("Helló kedves világ");

let array = ["apple", 0, "0", null, NaN, {}, undefined, false, ""]
let result = array.filter(value => !value);
console.log(result);
