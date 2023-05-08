function createPhoneNumber(numbers) {
  const phoneString = numbers.join("");

  return `(${phoneString.slice(0, 3)}) ${phoneString.slice(
    3,
    6
  )}-${phoneString.slice(6)}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
