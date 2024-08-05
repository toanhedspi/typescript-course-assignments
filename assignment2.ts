enum NumType {
  ODD = "odd",
  EVEN = "even"
}

const input: string | null = prompt("Enter a number");

if (input === null || input == "") {
  alert("Input is not a number");
} else {
  let numType: string = parseInt(input, 10) % 2 === 0 ? NumType.EVEN : NumType.ODD;
  alert(`Number is ${numType}`);
}
