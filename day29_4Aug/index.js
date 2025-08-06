//print inverted triangle
// ****
// ***
// **
// *

function pattern1(row, col) {
  if (row === 0) return;

  if (col < row) {
    process.stdout.write("*");
    pattern1(row, col + 1);
  } else {
    console.log();
    pattern1(row - 1, 0);
  }
}

// pattern1(4, 0);

//Pattern triangle 2

function pattern2(row, col) {
  if (row === 0) return;
  if (col < row) {
    pattern2(row, col + 1);
    process.stdout.write("*");
  } else {
    pattern2(row - 1, 0);
    console.log();
  }
}
pattern2(4, 0);
