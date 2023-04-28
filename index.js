// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

const coffeeStock = require('./state');

const makeCofffe = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams)
    {
        console.log("Kopi Berhasil Dibuat!");
    }else{
        console.log("Biji Kopi Sudah Habis");
    }
}

makeCofffe("coffee", 1000);