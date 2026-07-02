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

let searchId = 103;
let found = false;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === searchId) {
        console.log("Employee Found");
        console.log("Name:", employees[i].name);
        console.log("Salary:", employees[i].salary);
        found = true;
        break;
    }
}

if (found === false) {
    console.log("Employee Not Found");
}