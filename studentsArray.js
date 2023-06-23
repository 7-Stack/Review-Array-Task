const STUDENTS = 
    [{ name: "Grace", class: 6, age: 13},
    { name: "Mercy", class: 5, age: 11},
    { name: "Goodness", class: 6, age: 14},
    { name: "Divine", class: 4, age: 9},
    { name: "Ever", class: 3, age: 8}
    ]

    function findStudentsByName(name) {
        for (let i = 0; i < STUDENTS.length; i++) {
            if (STUDENTS[i].name === name) {
                return STUDENTS[i];
            }
        }
    }

    function insertNewStudent(newObject) {
        return STUDENTS.push(newObject);
        
    }

    function filterByAge(STUDENTS) {
        return STUDENTS.filter(STUDENTS => STUDENTS.age >= 10);
    }

    function sortByAge(STUDENTS) {
        return STUDENTS.sort((a, b) => a.age - b.age);
    }

const newObject = { name: "Nonso", class: 2, age: 7 }
const filteredSTUDENTS = filterByAge(STUDENTS);

console.log(findStudentsByName("Ever"));
console.log(newObject);
console.log(filteredSTUDENTS);
console.log(STUDENTS);
