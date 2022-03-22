async function showMessageLater(message) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if( message === "hello"){
                return reject("Something went wrong.");
            }
            return resolve(message);
        }, 1000);
    });
}

const myFunction = async () => {
    try{
        let result = await showMessageLater("hello5");
        console.log(result);
        result = await showMessageLater("hello6");
        console.log(result);
        result = await showMessageLater("hello7");
        console.log(result);
        result = await showMessageLater("hello");
        console.log(result);
    } catch(error) {
        console.log("error");
    }
}

myFunction();

// let resultMy = await showMessageLater("üdvözletem");

// showMessageLater("hello").then( (result)  => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


// showMessageLater("hello").then( (result)  => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// showMessageLater("szevasz").then( (result)  => {
//     console.log(result);
//     showMessageLater("szia").then( (result)  => {
//         console.log(result);
//     })
// }).catch((error) => {
//         console.log(error);
// });


// showMessageLater("szevasz").then( (result)  => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });