const laptop={
    make:'dell ,lenovo',
    medel:'alienware',
    memory:['SSD','HDD'],
    cores:8,
    memorySize:[256,512]
};

console.log(laptop);

console.log(Object.keys(laptop));

console.log(Object.entries(laptop));
console.log(Object.values(laptop));

const laptopCopy=Object.assign({},laptop);

console.log(laptopCopy);

