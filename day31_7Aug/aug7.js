console.log("...7thAug");

//print all the subsequnces of the string

function strSub(str, index = 0, carrie = "") {
  if (index >= str.length) {
    console.log(carrie);
    return;
  }

  strSub(str, index + 1, carrie + str[index]);
  strSub(str, index + 1, carrie);
}

strSub("xyz");
