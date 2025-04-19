//Stack and Heap memory

// Stack memory is allocated in Primitive datatypes, Copies are there

// Heap memory is used in Non Primitive Datatypes, References are there

//Primitive --- String

let hola1="Wildbanana"
let hola2=hola1

console.log(hola2);
hola2="CholeBhature"
console.log(hola2);


//Non-Primitive ---- Object


let userOne={
    name:"cola",
    age:1
}

let userTwo=userOne

userTwo.age=69

console.log(userOne.age);
console.log(userTwo.age);

