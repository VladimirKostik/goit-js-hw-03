function filterArray(numbers, value) {
    const index = [];
    for (const number of numbers) {
      if (number > value) {
        index.push(number);
      }
    }
return index;
}

//ще варіант

/* 
function filterArray(numbers, value) {
return numbers.filter(number => number > value);
} 
*/



// старий код

/* 
function filterArray(numbers, value) {
    const index = numbers.indexOf(value);
  if (index !== -1) {
    return numbers.slice(index + 1);
  } else {
    return numbers.filter(number => number > value);
  }
}
*/



  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


