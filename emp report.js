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

for (let i = 0; i < employees.length; i++) {
    console.log(`Employee Name : ${employees[i].name}`);
    console.log(`Employee ID : ${employees[i].id}`);
    console.log(`Salary : ${employees[i].salary}`);
    console.log("");
}
