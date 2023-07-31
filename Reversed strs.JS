const prompt = require("prompt-sync")();
//Reversed strs 
let str = prompt()
let newstr=""
for(let i=str.length-1 ; i>=0  ; i--){
    newstr += str[i]
}
console.log("["+ newstr +"]")
