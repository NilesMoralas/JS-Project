// for of

// ["", "",""]
// [{}, {}, {}]


const arr=[1,2,3,4,5]

for(const i of arr){
    // console.log(i);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map()
map.set('NP', "Nepal")
map.set('MR', "Moroco")
map.set('USA', "United States of America")

// console.log(map)

for(const [key, value] of map){
    console.log(key, ':', value);
} 