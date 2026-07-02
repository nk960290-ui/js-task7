let employees = [
    {
        name: "Navaneethan",
        id: 101,
        salary: 30000
    },
    {
        name: "abi",
        id: 102,
        salary: 60000
    },
    {
        name: "varun",
        id: 103,
        salary: 45000
    }
];

let highest = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }
}

console.log("Highest Salary Employee");
console.log("Name:", highest.name);
console.log("ID:", highest.id);
console.log("Salary:", highest.salary);