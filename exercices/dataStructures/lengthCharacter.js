// Compare if two characters have the same length

const lengthCharacter = (ch1, ch2) => {
  if (ch1.length !== ch2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < ch1.length; i++) {
    obj1[ch1[i]] = (obj1[ch1[i]] || 0) + 1;
  }
  return obj1
};
console.log(lengthCharacter("tata", "toto"));
