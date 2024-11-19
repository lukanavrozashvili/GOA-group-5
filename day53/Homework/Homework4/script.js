const carInfo = {
    name: "Bmw",
    model: "e34",
    years: 1987,
    color: "black",
    engine: "BMW S38 inline-six engine",
    carInfoTogether: function(){
        console.log(carInfo.name + ' ' + carInfo.model + ' ' + carInfo.years + ' ' + carInfo.color + ' ' + carInfo.engine)
    }
}
console.log(carInfo.carInfoTogether())