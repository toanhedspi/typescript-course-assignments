const num: string | null = prompt("Enter a number");

const isPrimeNumber = (num: number): boolean => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

if (num === null || num == "") {
  alert("Input is invalid");
} else {
  alert(`Number is ${isPrimeNumber(parseInt(num, 10)) ? "prime" : "not prime"}`);
}
