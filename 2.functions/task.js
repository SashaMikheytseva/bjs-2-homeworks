/*function getArrayParams(...arr) {

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}*/

///task 1
function getArrayParams(...arr) {
  let array = [...arr];
  let min = Math.min(...array);
  let max = Math.max(...array);
  let sum = array.reduce(function(a, b) {
    return a + b;
  })
  let avg = sum / arr.length;
  return array = {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  } 
}
//console.log(getArrayParams(1, 2, 3, -100, 10));


///task 2

function summElementsWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) {
    return 0;
  }
  let sum = array.reduce(function(a, b) {
    return a + b;
  })
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) {
    return 0;
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEvenElement += array[i];
    } else {
      sumOddElement += array[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEvenElement += array[i];
      countEvenElement ++;
    }
  }
  return sumEvenElement / countEvenElement;
}

/*console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));*/

///task 3

function makeWork(arrOfArr, func) {
  let array = [...arrOfArr];
  let maxWorkerResult = -Infinity;
  let sumFunc = 0;
  for (let i of array) {
    sumFunc = func(...i);
    if (sumFunc > maxWorkerResult) {
      maxWorkerResult = sumFunc;
    }
  }
  return maxWorkerResult;
}
//let array = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
//console.log(makeWork(array, summElementsWorker));
