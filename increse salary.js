let employees = [
{
    name: "Naveen",
    salary: 30000
},
{
    name: "John",
    salary: 60000
},
{
    name: "Arun",
    salary: 45000
}
];

employees.forEach(employee => {
    employee.salary += 5000;
    console.log(employee.name + " : " + employee.salary);
});