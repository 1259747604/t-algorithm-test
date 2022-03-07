//给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串

const validPalindRome = s => {
  let len = s.length;
  let i = 0;
  let j = len - 1;
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  const isPalindRome = (i, j) => {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  };

  if (isPalindRome(i + 1, j)) return true;
  if (isPalindRome(i, j - 1)) return true;

  return false;
};

console.log(validPalindRome('aba'));
console.log(validPalindRome('abca'));
console.log(validPalindRome('abcdbda'));
