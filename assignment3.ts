const input: string | null = prompt("Enter a number");

if (input === null || input == "") {
  alert("Input is not a number");
} else {
  let num: number = parseInt(input, 10);
  let counter = 0;
  while (counter < num) {
    if (counter % 5 !== 0) {
      console.log(counter);
    }

    counter += 1;
  }
}
