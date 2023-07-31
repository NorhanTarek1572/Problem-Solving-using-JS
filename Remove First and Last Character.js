const prompt = require("prompt-sync")();
//Remove First and Last Character

function remove_first_and_last_character(str){
  str = str.slice(1, str.length - 1);
  return str
}

console.log(remove_first_and_last_character("nourhan"))