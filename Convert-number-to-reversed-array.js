function Convert_number_to_reversed_array(number){
    let num =1 , revesr =1 ,i=1;
    let arr =[]
    while(number=!0){
        num= number%10
        number=number/10
        arr[i]=num
        i++
    }
    return arr 
}

console.log(Convert_number_to_reversed_array(1234))