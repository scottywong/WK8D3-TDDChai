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
  let returnArr = [];
  if(step === 1){
    for(let i = min; i <= max; i++){
      returnArr.push(i);
    }
    return returnArr;
  }
  if(step !== 1){
    for(let i = min; i <= max; i += step){
      returnArr.push(i)
    }
    return returnArr;
  }
}


module.exports = { isFive, isOdd, myRange };
