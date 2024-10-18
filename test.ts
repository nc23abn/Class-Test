import Calc from './Add';

let MockData = {
    num: 2,
    num2: 4
}

let result = Calc.add(MockData.num, MockData.num2);

if(result === 6){
    console.log(`Test Passed`)
} else {
    console.log(`Test failed`)
}