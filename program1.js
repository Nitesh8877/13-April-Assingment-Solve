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
        education:{
            School:'jai swal high school',
            board:'BSEB',
            Year:2017
        }
    
};

const {1:{id,name,occupation}}=employees;
const {1:{...arr},2:{...arr2}}=employees;


console.log(id);
console.log(name);
console.log(occupation);
console.log("-------------------------------")
console.log(arr);
console.log(arr2);

const {School,board,Year}=3;

console.log("This is my education School Name"+School+" and board Nmae: "+board+" year "+Year);

