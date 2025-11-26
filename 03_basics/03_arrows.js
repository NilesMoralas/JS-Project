const user = {
    username: "Nilesh",
    price: 7878,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "nilesh"
//     console.log(this);

// }

// chai()



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= Arrow Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

const chai = () => {
    let username = "nilesh"
    console.log(this.username);
}

// chai ()

// const addTwo  = (num1, num2) => {
//     return num1 + num2 
// }

// console.log(addTwo(10, 20));

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo= (num1, num2) => ({username: "nilesh"})
console.log(addTwo(10, 20));