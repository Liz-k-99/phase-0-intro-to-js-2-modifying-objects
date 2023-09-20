
    const weather = {
        monday:'rain',
        tuesday:'drizzle',
        wednesday:'depression',
        thursday:'sun',
        friday:'aticipation',
        saterday:'love',
        sunday:'peace'
    };

weather.tryday = 'no giving up';
console.log(weather);

const pay = {
    hourlyRate: 10,
    tax:0.15,
    yearlyIncome:30000
};
console.log(pay);
pay.deductions = pay.tax * pay.yearlyIncome;
console.log(pay.deductions);
pay.takeHome = pay.yearlyIncome - pay.deductions;

const building = {
    "red-bricks": 1,
    "wood": 200
};
// Calculate the "perimeter" and add it as a property to the 'building' object
building["perimeter"] = building["red-bricks"] * 4 * 5 * 6;

console.log(building); 
// Output: 120

const newPay = {
    ...pay,
    hourlyRate: 30,
    duties: 'Become a lot more intelligent'
};
console.log(newPay)
console.log(pay);

const work = (pay, building) => {
    return {
        ...pay,
        hourlyRate:50,
        ...building,
        'red-bricks':500,
        budget: 5000
    }
};
console.log(work(pay, building));
delete newPay.duties;
console.log(newPay);