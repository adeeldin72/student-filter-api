
// Fetch call 
export const getInfo = () => {
    return fetch('https://api.hatchways.io/assessment/students').then(res => res.json());
}

// Average calculator that loops through an array of numbers and returns the average
export const computedAverage = (average) => {
    let finalAverage = 0;
    for (let i = 0; i < average.length; i++) { //loop through the array
        finalAverage += Number(average[i]); //convert to number and add to finalAverage
    }
    return (finalAverage / average.length) //divide total average with length of array to get the average of what was passed
}