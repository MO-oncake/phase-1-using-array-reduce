const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// The variable totalBatteries takes the batteryBatches array and by using reduce() it adds up all the values in the array. 
// The reduce() method takes two arguments: the accumulator and the current value. The accumulator is the variable that will hold the total, and the current value is the value of the current item in the array. 
// The accumulator is initialized to 0 as it's starting value. This value could be altered at any point in the reduce() method depending on the number of batteries on hand at the time.