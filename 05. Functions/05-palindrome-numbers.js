function print(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(checkForPalindrome(arr[i]));
  }
}

function checkForPalindrome(num) {
  num = String(num);
  numCopy = num.split("").reverse().join("");

  if (num === numCopy) {
    return true;
  } else {
    return false;
  }
}

print([123, 323, 421, 121]);
print([32, 2, 232, 1010]);
