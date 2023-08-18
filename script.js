function findSecondLargest(a, n) {
  a.sort();

  let second_largest = 0;
  
  for (let i = n - 2; i >= 0; i--) {
    if (a[i] != a[n - 1]) {
      second_largest = a[i];
      break;
    }
  }

  return second_largest;
}

const a = [12, 35, 1, 10, 34, 1 ];
let n = a.length;
let answer = findSecondLargest(a, n);
console.log("The second largest element in the array is: " + answer);
