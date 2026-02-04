/* UTILITY FUNCTION: calculateAndValidate
   Description: Performs a math operation, logs the output in a standard format, 
   and validates the data type.
*/
const calculateAndValidate = (num1,num2,operation)=>{
    let result
    let operationName
    //switch statement to handle different operations
    switch(operation){
        case 'power':
            result = (num1)**(num2)
            operationName = "Power"
            break

        case 'add':
            result = num1+num2
            operationName = "Addition"
            break

        case 'minus':
            result = num1-num2
            operationName = "Substraction"
            break

        case 'multiply':
            result = num1*num2
            operationName = "Multiplication"
            break

        case 'divide':
            result = num1/num2
            operationName = "Division"
            break

        case 'rem':
            result = num1%num2
            operationName = "Reminder"
            break

        default:
            console.log(`ERROR : ${operation} not supported !! `)
            return
    }
    console.log(`Performing ${operationName} on ${num1} and ${num2} result is ${result}`)
    if(typeof result === 'number'){
        console.log(`[ASSERTION PASSED]: Result type is valid (${typeof result})`)
    }
    else console.log(`[ASSERTION FAILED]: Result type is not valid (${typeof result})`)
}
//Test Cases
calculateAndValidate(2, 3, 'power')
calculateAndValidate(5, 3, 'add')
calculateAndValidate(6, 1, 'minus')
calculateAndValidate(4, 4, 'multiply')
calculateAndValidate(6, 2, 'divide')
calculateAndValidate(5, 3, 'rem')
calculateAndValidate(20, 1, 'hi')


