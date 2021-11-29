const testArray = [3,5,-4,8,11,1,-1,6]
const targetSum  = 10;

const findSum = (ts,array) => {
    let numsArray = {}
    for (const num of array){
        const potentialMatch = ts - num;
        if (potentialMatch in numsArray){
            return [potentialMatch, num]
        } else {
            numsArray[num] = true;
        }
    }
}

console.log(findSum(targetSum,testArray))