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

const cloneEmployee=Object.assign({},employees);

for([key,value] of  Object.entries(cloneEmployee)){
    console.log(value);
}
