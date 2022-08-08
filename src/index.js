module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const openBrackets = [];
  const closeBrackets = {};
  const reverseCloseBrackets = {};

  for (let bracket of bracketsConfig) {
    openBrackets.push(bracket[0]);
    closeBrackets[bracket[1]] = bracket[0];
    reverseCloseBrackets[bracket[0]] = bracket[1];
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (stack.length > 0 && currentSymbol === stack[stack.length - 1] && 
      currentSymbol === reverseCloseBrackets[currentSymbol]) {
      stack.pop();}
    else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol)
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1]
      if (topElement === closeBrackets[currentSymbol]) {
        stack.pop();
      } else return false
    }
  }
  return stack.length === 0;
}