/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; ++i) {
    switch (s[i]) {
      case '(':
        stack.push(s[i]);
        break;

      case '[':
        stack.push(s[i]);
        break;

      case '{':
        stack.push(s[i]);
        break;

      case ')':
        if (stack.at(-1) === '(') {
          stack.pop();
        } else {
          return false;
        }

        break;

      case ']':
        if (stack.at(-1) === '[') {
          stack.pop();
        } else {
          return false;
        }

        break;
      case '}':
        if (stack.at(-1) === '{') {
          stack.pop();
        } else {
          return false;
        }

        break;
    }
  }

  return stack.length === 0;
};

const isValidTwo = (s) => {
  const stack = [];
  const map = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  for (const letter of s) {
    // if the letter is one of the closing tags
    if (letter in map) {
      if (stack.length > 0 && stack.at(-1) === map[letter]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(letter);
    }
  }

  return stack.length === 0;
};

module.exports = { isValid, isValidTwo };
