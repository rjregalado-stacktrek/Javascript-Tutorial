function getFactorial(n) {
    if (!Number.isInteger(n) || n < 0) { // 0.5, "5.0"
      return undefined;
    }
    let result = 1;
    //var printedOutput = "";
    for (let i = n; i >= 1; i--) {
        //printedOutput += i + "*" 
        
      result *= i; // result = result * i
    }
    //console.log(`${printedOutput.substring(0,printedOutput.length-1)} = ${result}`)
    return result;
  }

  //console.log(getFactorial(5))
