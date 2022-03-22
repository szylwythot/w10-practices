const array1 = [17, 28, 29];
const array2 = [2, 73, 20190503];

const array3 = [...array1];
array3.push(6);
console.log("array1: ", array1);
console.log("array3: ", array3);

const array4 = [...array1, ...array2];
console.log("array4: ", array4);

const userProfile = {
    name: "Szilvi",
    age: "33",
    country : "Lala land"
};

const userProfile2 = {...userProfile, gender: "winettou", name: "Mrs Poppins"};
console.log("userProfile2: ", userProfile2);

