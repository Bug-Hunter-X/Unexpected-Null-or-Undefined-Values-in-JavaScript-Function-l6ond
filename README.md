# JavaScript Null/Undefined Handling

This repository demonstrates a common error in JavaScript related to handling null or undefined values and provides a solution.

## The Bug
The `foo` function fails to explicitly handle cases where arguments `a` or `b` might be null or undefined. This can lead to unexpected behavior or errors depending on how the function uses these values.

## The Solution
The solution adds explicit null checks to the beginning of the function, returning `null` immediately if either `a` or `b` is null. This prevents further processing that might throw exceptions.  Alternative solutions could involve assigning default values or throwing a custom error for better handling.

## How to Run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run each file to observe the behavior of the buggy and corrected code.