let employees = [
{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}

console.log("Total Salary : " + totalSalary);
