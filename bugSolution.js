function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }

  //More robust handling 
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 'Invalid input: a and b must be numbers.';
  }

  return a + b; // Perform calculation only if inputs are valid
} 
console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo('abc', 10)); // Output: Invalid input: a and b must be numbers.