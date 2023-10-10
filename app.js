//Exercise 1: hasOddNumber
function hasOddNumber(arr) {
  return arr.some(function (num) {
    return num % 2 !== 0;
  });
}

//Exercise 2: hasAZero
function hasAZero(num) {
  let numStr = num.toString();
  let numArr = numStr.split("");
  return numArr.some(function (digits) {
    return digits.indexOf("0") !== -1;
  });
}

//Exercise 3: hasOnlyOddNumbers
function hasOnlyOddNumbers(arr) {
  return arr.every(function (nums) {
    return nums % 2 !== 0;
  });
}

//Exercise 4: hasNoDuplicates
function hasNoDuplicates(arr) {
  return arr.every(function (nums, i) {
    return i === arr.indexOf(nums);
  });
}

//Exercise 5: hasCertainKey
function hasCertainKey(objArr, key) {
  return objArr.every(function (obj) {
    return obj[key];
  });
}

//Exercise 6: hasCertainValue
function hasCertainValue(objArr, key, value) {
  return objArr.every(function (obj) {
    return obj[key] === value;
  });
}
