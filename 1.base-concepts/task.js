"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
    if (d < 0) {
      arr = [];
    } else if (d === 0) {
      arr.push((-b/(2*a)));
    } else if (d > 0) {
      arr.push((-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a));
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true) {
    return false;
  } else {
    percent = (percent / 100) / 12;
    let loanBody = amount - contribution;
    let payment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let totalPayment = countMonths * payment;
    return Number(totalPayment.toFixed(2));
  }
}