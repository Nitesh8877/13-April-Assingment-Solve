const employees = {
        1: {
            id: 1,
            name: "John",
            occupation: "Back-end Engineer"
        },
        2: {
            id: 2,
            name: "Nitesh",
            occupation: "Front-end Engineer"
        },
    
};

const {1:{id,name,occupation}}=employees;
const {1:{...arr},2:{...arr2}}=employees;

console.log(id);
console.log(name);
console.log(occupation);
console.log("-------------------------------")
console.log(arr);
console.log(arr2);
