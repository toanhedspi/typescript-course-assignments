const mathGrade: string | null = prompt("Enter your math grade");
const physicGrade: string | null = prompt("Enter your physics grade");
const chemistryGrade: string | null = prompt("Enter your chemistry grade");

const calculateAverage = (math: number, physic: number, chemistry: number): string => {
  const average = (math + physic + chemistry) / 3;
  let rating: string = "";

  if (average > 90) {
    rating = "A Grade";
  } else if (average > 70) {
    rating = "B Grade";
  } else {
    rating = "C Grade";
  }

  return rating;
}

if (mathGrade === null || physicGrade === null || chemistryGrade === null || mathGrade === "") {
  alert("Invalid input");
} else {
  alert(`Average grade is ${calculateAverage(parseInt(mathGrade, 10), parseInt(physicGrade, 10), parseInt(chemistryGrade, 10))}`);
}