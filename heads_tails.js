/**
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
 */
const prompt = require("prompt-sync")();
function heads_tails(arr){

    let new_arr =[]
    for (let i =arr.length-1 , j=0 ; i>=0  ; i-- , j++){
        new_arr[j] = arr[i]
    }
 return new_arr
}

//====================================
// function heads_tails(arr){
//    let temp =arr[0] 
//    arr[0] = arr[arr.length-1]
//    arr[arr.length-1] = temp
//  return arr
// }

let arr = []
console.log(heads_tails(["shady" , "aser" , "nourhan"]));
