// remove all the a's from the code.
function remA(stri) {
  if (stri.length === 0) {
    return "";
  }
  const firstChar = stri[0] === "a" || stri[0] === "A" ? "" : stri[0];

  return firstChar + remA(stri.slice(1));
}

console.log(remA("capaAnnam"));

//skip entire sting

function skipString(word) {
  if (word.length === 0) {
    return "";
  }

  if (word.toLowerCase().startsWith("apple")) {
    return skipString(word.slice(5));
  }

  return word[0] + skipString(word.slice(1));
}

console.log(skipString("Appleday"));

//skip app when app !== apple

function skipApp(word) {
  if (word.length === 0) {
    return "";
  }

  if (
    word.toLowerCase().startsWith("app") &&
    !word.toLowerCase().startsWith("apple")
  ) {
    return skipApp(word.slice(3));
  }

  return word[0] + skipApp(word.slice(1));
}

console.log("oytput: " + skipApp("anAppleadayappremove"));

///print all the subarray's
//take  not take

function allSubSeq(word, index, carrier) {
  if (word.length === index) {
    console.log(carrier);
    return;
  }

  allSubSeq(word, index + 1, carrier + word[index]);
  allSubSeq(word, index + 1, carrier);
}

allSubSeq("abc", 0, "");
