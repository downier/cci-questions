let isBalanced = (str) => {
  let openQ = [];
  let brackets = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let arr = str.split('');
  for (let key of arr) {
    if (key === '(' || key === '{' || key === '[') {
      openQ.push(key);
    }
    if (key === ')' || key === '}' || key === ']') {
      if (key !== brackets[openQ.pop()]) {
        return false;
      }
    }
  }
  if (openQ) {
    return false;
  }
  return true;
};


console.log(isBalanced('[{()}]'));