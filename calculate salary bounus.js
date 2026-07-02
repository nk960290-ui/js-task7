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

let bonus = 5000;

for (let i = 0; i < employees.length; i++) {
    let totalSalary = employees[i].salary + bonus;

    console.log(employees[i].name + " : " + totalSalary);
}
