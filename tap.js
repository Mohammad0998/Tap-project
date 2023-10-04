
//const nums = [9,6,4,2,3,5,7,0,1];  Example


function missingNumber(nums) {
    const n = nums.length;
    const expSum = (n * (n + 1)) / 2;
    const actSum = nums.reduce((sum, num) => sum + num, 0);
    return expSum - actSum;
}

//console.log(missingNumber(nums))