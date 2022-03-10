function isFive(num) {
  return num === 5 ? true : false;
}

function isOdd(number) {
  if(typeof number !== "number"){
    throw new Error('Please enter a number');
  }
  if(Math.abs(number) % 2 === 1){

    return true;
  } 
  else {

    return false;
  }
}

function myRange(min, max, step = 1) {
  // Your code here
}


module.exports = { isFive, isOdd, myRange };