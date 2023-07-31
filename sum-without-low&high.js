// the sum of numbers in array without the lowest and the highest numers

let numbers= [10,9,8,7,1,2,3,4]
/*
// =============================* way number 1 *===============================================//
function sum (arr ,min , max){
    let sum =0;
    for(i=0 ; i<arr.length ;i++){
        sum =sum + arr[i]
    }
    return sum-(min+max)
}

function max (arr){
    let max =arr[0]
    for(i=1 ; i<arr.length && arr[i]>max ;i++){
        
        if ( arr[i] > arr[i-1]){
            max =arr[i] 
        }
    }
   
    return max 
}

function min (arr){
    let min =arr[0]
    for(i=1 ; i<arr.length && arr[i]<min ;i++){
        
        if ( arr[i] < arr[i-1]){
            min =arr[i] 
        }
    }
   
    return min 
}

let minvalue =min(numbers)
let maxvalue =max(numbers)
console.log("the sum of this array  ["+ numbers +"  ] without the max ( "+ maxvalue+") and min("+ minvalue+") is :" + sum(numbers,minvalue ,maxvalue))
*/

/*
// =============================* way number 2 *===============================================//


function sum (arr){
    let sum =0;
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    for(i in arr){
        sum = sum+ arr[i]
    }
   console.log(min +"," + max)
    return sum-(min+max)
}

console.log(sum(numbers))
*/


// =============================* way number 3 *===============================================//
// https://www.youtube.com/watch?v=tH_2KbGsUWA&list=PL3iticg1TvA-jMsFwDgdb6Cy_L__qL56H&index=4
