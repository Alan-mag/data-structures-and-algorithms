// can function be returned as a palindrome

function permPalindrome(str) {
  let ok = false;
  let charMap = buildCharMap(str);
  console.log(charMap);

  let odds = 0;
  for (prop in charMap) {
    if (charMap[prop] % 2 !== 0) {
      odds++;
    }
  }
  if (odds > 1) {
    ok = false;
  } else {
    ok = true;
  }
  console.log(ok);
  return ok;
};

function buildCharMap(str) {
  let map = {};
  for (let letter of str) {
    map[letter] = map[letter] + 1 || 1;
  }
  return map;
}

permPalindrome('abba');
permPalindrome('jordan');