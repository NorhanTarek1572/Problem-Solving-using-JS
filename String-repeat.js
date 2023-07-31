function String_repeat(number ,string){
    let new_string=""
    for (i=0 ; i<number ;i++){
        new_string+= string }
    return new_string
} 

function String_repeat_with_counter(number ,string){
    let new_string=""
    for (i=0 ; i<number ;i++){
        new_string+= "("+ (i+1) +")" +string }
    return new_string
    }

console.log(String_repeat(7,"nourhan  "))
console.log(String_repeat_with_counter(7,"nourhan  "))