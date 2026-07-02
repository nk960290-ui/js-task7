let employees = [
{
    name: "Naveen",
    experience: 2
},
{
    name: "John",
    experience: 7
},
{
    name: "Arun",
    experience: 5
}
];

for (let i = 0; i < employees.length; i++) {

    if (employees[i].experience >= 5) {
        console.log(employees[i].name + " : Senior Employee");
    } else {
        console.log(employees[i].name + " : Junior Employee");
    }

}

