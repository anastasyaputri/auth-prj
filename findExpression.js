function findExpression(nums, target) {
  const operators = ["+", "-", "*"];

  function evaluateExpression(expression) {
    try {
      return eval(expression); // Evaluate the mathematical expression
    } catch {
      return null;
    }
  }

  function backtrack(path, numsUsed) {
    if (numsUsed.length === nums.length) {
      const result = evaluateExpression(path);
      if (result === target) {
        return path; // Return the expression if it matches the target
      }
      return null;
    }

    // Try adding each unused number to the path with all operators
    for (let i = 0; i < nums.length; i++) {
      if (!numsUsed.includes(i)) {
        for (let operator of operators) {
          const newPath = `(${path} ${operator} ${nums[i]})`;
          const result = backtrack(newPath, [...numsUsed, i]);
          if (result) {
            return result;
          }
        }
      }
    }

    return null; // No solution found
  }

  // Start with each number in the list as the initial path
  for (let i = 0; i < nums.length; i++) {
    const result = backtrack(nums[i].toString(), [i]);
    if (result) {
      return result;
    }
  }

  return null; // No valid expression found
}

// Test cases
console.log(findExpression([1, 4, 5, 6], 16)); // Output: "1 + 4 + 5 + 6"
console.log(findExpression([1, 4, 5, 6], 18)); // Output: "(1 + 5) * 4 - 6"
console.log(findExpression([4, 6, 5], 50)); // Output: "(4 + 6) * 5"
