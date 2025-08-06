// remove all the a's from the code.
function remA(stri) {
  if (stri.length === 0) {
    return "";
  }
  const firstChar = stri[0] === "a" || stri[0] === "A" ? "" : stri[0];

  return firstChar + remA(stri.slice(1));
}

console.log(remA("capaAnnam"));
