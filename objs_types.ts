enum Rank { 
    EMPLOYEE, 
    OFFICER, 
    MANAGER
};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    rank: Rank;
} = {
    name: "Hazim",
    age: 26,
    hobbies: ['Football', 'Baking'],
    role: [2, 'author'],
    rank: Rank.EMPLOYEE
}

//console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby)
}

person.hobbies.map((item)=>{
    console.log(item + "mapped" + 2)
})

person.role.push('admin')
console.log(person.role)

console.log(person.rank)
