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

console.log("Total Employees : " + employees.length);


let highest = employees[0];
let lowest = employees[0];


let totalSalary = 0;

let searchId = 103;
let found = false;

console.log("Employees earning more than 40000 :");

for (let i = 0; i < employees.length; i++) {

    totalSalary = totalSalary + employees[i].salary;

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }

    if (employees[i].salary > 40000) {
        console.log(employees[i].name);
    }

    if (employees[i].id === searchId) {
        console.log("Employee Found");
        console.log("Name : " + employees[i].name);
        console.log("Salary : " + employees[i].salary);
        found = true;
    }
}

if (found === false) {
    console.log("Employee Not Found");
}

console.log("Highest Salary : " + highest.salary);
console.log("Lowest Salary : " + lowest.salary);
console.log("Total Salary : " + totalSalary);
console.log("Highest Salary Employee : " + highest.name);
console.log("Lowest Salary Employee : " + lowest.name);

console.log("Salary After Bonus");

for (let i = 0; i < employees.length; i++) {
    let newSalary = employees[i].salary + 5000;
    console.log(employees[i].name + " : " + newSalary);
}

console.log("Employee Report");

for (let i = 0; i < employees.length; i++) {
    console.log(`Employee Name : ${employees[i].name}`);
    console.log(`Employee ID : ${employees[i].id}`);
    console.log(`Salary : ${employees[i].salary}`);
    console.log("");
}
