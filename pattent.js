
//  Tringle 
let pattens1 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {
    // This for loops is for space
    for (let j = 1; j <= b - i; j++) {
      string += " ";
    }
    // This for loop is for Columes
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pattens1(5)
// THis is for upside Down tringle
let pattens2 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 0; i < b; i++) {
    // This loop is for space
    for (let k = 0; k < i; k++) {
      string += " "
    }
    // THis For Loop is for Columes
    for (let j = 0; j < 2 * (b - i) - 1; j++) {
      string += "*"
    }
    // This is for New line
    string += "\n"
  }
  console.log(string)
}
pattens2(5)

// bordered Tringle
let pattens3 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 0; i <= b; i++) {
    // This loop is for space
    for (let k = 0; k <= b - i; k++) {
      string += " "
    }
    // THis For Loop is for Columes
    for (let j = 0; j < 2 * i - 1; j++) {
      if (i == 1 || i == b) {
        string += "*"
      }
      else {
        if (j == 0 || j == 2 * i - 2) {
          string += "*"
        }
        else {
          string += " "
        }
      }
    }
    // This is for New line
    string += "\n"
  }
  console.log(string)
}
pattens3(5)

// Square 
let pattens4 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {
    // This loop is for space
    for (let k = 1; k <= b; k++) {
      string += "*"
    }
    // Thia is for new line
    string += "\n"
  }
  console.log(string)
}
pattens4(5)

// Border Square
let pattens5 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {
    // This loop is for colomes
    for (let k = 1; k <= b; k++) {
      if (i == 1 || i == b) {
        string += "*"
      }
      else {
        if (k == 1 || k == b) {
          string += "*"
        }
        else {
          string += " "
        }
      }
    }
    // Thia is for new line
    string += "\n"
  }
  console.log(string)
}
pattens5(5)

// right Tringle
let pattens6 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {
    // This loop is for space
    for (let j = 1; j <= b - i; j++) {
      string += " "
    }
    // This loop is for columes
    for (let k = 1; k <= i; k++) {
      string += "*"
    }
    // Thia is for new line
    string += "\n"
  }
  console.log(string)
}
pattens6(5)

// left Tringle
let pattens7 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {

    // This loop is for columes
    for (let k = 1; k <= i; k++) {
      string += "*"
    }
    // Thia is for new line
    string += "\n"
  }
  console.log(string)
}
pattens7(5)

// left Tringle
let pattens8 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {

    // This loop is for columes
    for (let k = 1; k <= i; k++) {
      if (i == 1 || i == b) {
        string += "*"
      }
      else {
        if (k == 1 || k == i) {
          string += "*"
        }
        else {
          string += " "
        }
      }
    }
    // Thia is for new line
    string += "\n"
  }
  console.log(string)
}
pattens8(10)

// left Tringle
let pattens9 = (b) => {
  let string = ""
  // This for loops is for Rows
  for (let i = 1; i <= b; i++) {
    // This loop is for space
    for (let j = 1; j <= b - i; j++) {
      string += " "
    }

    // This loop is for columes
    for (let k = 1; k <= i; k++) {
      if (i == 1 || i == b) {
        string += "*"
      }
      else {
        if (k == 1 || k == i) {
          string += "*"
        }
        else {
          string += " "
        }
      }
    }
    // Thia is for new line
    string += "\n"
  }
  console.log(string)
}
pattens9(10)