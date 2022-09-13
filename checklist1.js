// 1. Nested object
const developer = {
    name: 'Shakib Ahmed',
    id: 101, 
    details: {address: 'Thakurgoan', school: 'Thakurgoan Govt. school', height: '6ft', nature: 'polite'},
    favNumbers: [10, 20, 30, 40, 50, 60 , 70, 80, 90],
    supportIns: function(time){
        this.time = time + 2;
        return this.time
    }
}

// developer.supportIns()

// const supportSession = developer.supportIns(10);
// console.log(supportSession);
// console.log(developer.favNumbers[2])

// 2. templet string
const shakibDetails = `I am Sakib and my address is ${developer.details.address} 
and my favourite number is ${developer.favNumbers[1]}
My id number is ${developer.id}
`;
// console.log(shakibDetails)

//3. arrow function

const myNumber = () => {
const number = 89;
return number;
}
const num =  myNumber(0);
// console.log(num)

// 4. with 1 parameter arrow function
const number1 = num =>{
    const num2 = num / 7;
    return num2;
}

const result = number1(63)
// console.log(result);

// 5. Two parameter arrow function
const sum3 = (num1, num2) =>{
    const add = num1 + num2;
    const divide = add / 2;
    return divide;
}

const result2 = sum3(22, 12)
// console.log(result2);

// 5. 
const calculateSum = (num1, num2) =>{
    const firstNum = num1 + 7;
    const secondNum = num2 + 7;
    const addedTwoNum = firstNum + secondNum;
    return addedTwoNum;
}

const calculate = calculateSum(180, 200)
// console.log(calculate)

// 6. using array
const Numbers = [10, 20, 30, 40, 50, 60 , 70, 80, 90];
const singleNumber = Numbers.map(number =>(number / 7))
// console.log(singleNumber)

// 7. destructuring
const arrays = [10, 20, 30, 40, 50, 60 , 70, 80, 90]
const balance = arrays[1];
console.log(balance);
