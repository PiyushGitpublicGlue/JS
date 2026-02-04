/* UTILITY: Currency Cleaner & Calculator
   Scenario: Extracting numbers from formatted strings ("$500", "USD 500")
*/

const calculateTotalWithCurrency = (unitPrice,delFee)=>{
    console.log(`INPUT RAW PRICE : ${unitPrice}`)

    //if currency comes as Nan
    //let isNan = Number(unitPrice)
    if(isNaN(Number(unitPrice))) {
        console.log("it is not a Number need cleaning...")
        let extrcatedValue = unitPrice.replace(/[^0-9.]/g, "")
        console.log(typeof extrcatedValue)
        //check extracted value is Number
        if(typeof extrcatedValue === 'string') {
            console.log("It is number...proceed with calculation")
            let conversionToNumber = Number(extrcatedValue)
            finalAmount = conversionToNumber+delFee
            console.log(`final amount is ${finalAmount}`)
        }
    }


    

}

calculateTotalWithCurrency("$500",59)
calculateTotalWithCurrency("USD 50.8",59)


