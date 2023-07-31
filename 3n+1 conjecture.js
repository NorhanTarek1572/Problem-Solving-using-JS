/**
 The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
 */
const prompt = require("prompt-sync")();

/**
 * 
function hotpo(number){
    let count =0 ;
    while (number != 1){
        if(number%2 == 0) {// even
            number = number/2 
            count++
        }
        else{// odd
                number = 3*number+1
                count++       
        }  
    }  
   return count
}
 */

var count =0;
function hotpo(number){
       // let count =0 ;
       if(number != 1){
        if(number%2 == 0) {// even
            count++
            return(hotpo( number/2 ))}

        else{// odd
            count++  
               return (hotpo(3*number+1))
        }
       }
       else{ return count}        
      
    }
    

console.log(hotpo(23))