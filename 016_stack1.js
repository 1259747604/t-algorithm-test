// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

let leftToRight = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const isVaild = s => {
  if (!s.length) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '(' || char === '[' || char === '{') stack.push(leftToRight[char]);
    else if (!stack.length || stack.pop() !== char) {
      return false;
    }
  }
  return !stack.length;
};

console.log(isVaild('[{()}]'));
console.log(isVaild('[]{}[]'));
console.log(isVaild('{}[]'));
console.log(isVaild('{[(])}'));
console.log(isVaild('[()]}'));
