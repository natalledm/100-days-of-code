// Recursion is a function that calls itself until it finishes what was asked for.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
}