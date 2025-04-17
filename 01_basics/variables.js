const accountId= 140402
let accountEmail="wildbanana@gmail.com" //Let is used as there aint any scope problem
var accountPassword="123456" //Var not used cause of scope problem
accountCity="Jaipur"//Not recommended even when its allowed
let accountState; //Semicolon use ho na ho doesn't matter

// accountId = 15 // Not allowed to change const datatype wala variable bruh

accountEmail="bilota@gmail.com" 
accountPassword="64565956"
accountCity="Delhi"

/* console.log(accountId);
 console.log(accountEmail);
 console.log(accountPassword);
 console.log(accountCity);
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
