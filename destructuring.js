const userProfile = {
    name: "Szilvi",
    age: "33",
    country : "Lala land"
};

// const name = userProfile.name;
// const age = userProfile.age;

// const {name, age} = userProfile;
// console.log("name: ", name);
// console.log("age: ", age);

// const logNameAndAge = (incomingUser) => {
//     console.log(incomingUser.name);
//     console.log(incomingUser.age);
// };

// logNameAndAge(userProfile);

const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
};

logNameAndAge(userProfile);

const array = [1, 2, 3, 4];
// const first = array[0];
// const second = array[1];

// console.log("first: ", first);
// console.log("second: ", second);

const [firstNumber, secondNumber] = array;
console.log("firstNumber: ", firstNumber);
console.log("secondNumber: ", secondNumber);

const [x, ...y] = array;
console.log("x: ", x);
console.log("y: ", y);

