var isValid = function (s) {
  let hold = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      hold.push(char);
    } else {
      if (hold.length === 0 || char !== map[char]) {
        return false;
      }
    }
  }

  return hold.length === 0;
};

console.log(isValid("()[]{}"));
