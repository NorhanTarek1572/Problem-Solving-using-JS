
function Century_From_Year (year){
    let num = year/100 
    if(typeof(num) === 'int' )
        return num
    else return(parseInt(num+1))

}
console.log(Century_From_Year(1601))


//--------------------------
function Century_From_Year2 (year){
return (parseInt(year/100)+1)
}
console.log(Century_From_Year2(1060))