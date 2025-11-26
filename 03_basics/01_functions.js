function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


function addTwoNumbers(number1, number2){


        console.log(number1 + number2)    
//     let result= number1 + number2
//     return number1 + number2
//     return result;
// 
}

// addTwoNumbers(4, "6")




function loginUser(username = "Nilesh"){
    if(username === undefined){
            console.log("Please enter a username");
            return
    }
    return `${username} just logged in`
}

// console.log(loginUser("Nilesh"))
// console.log(loginUser("Cattle"))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===== Function with objects and array +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newUser = {
    username: "Nilesh",
    price: 6767
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(newUser)
handleObject({
    username: "Nilehs",
    price: 233
})


const newArray =  [100, 200 ,300 ,500]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(newArray));
