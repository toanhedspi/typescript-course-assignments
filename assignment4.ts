const employee: any = {
  id: "1",
  name: "Steve Jobs",
  salary: "10000USD"
}

for (const prop in employee) {
  console.log(`${prop}: ${employee[prop]}`);
}

const { id, name: employeeName, salary } = employee;
console.log(id, employeeName, salary);