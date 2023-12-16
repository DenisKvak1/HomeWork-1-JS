function calculateTax(income) {
    let deductionSingle = 14600;
    let taxableIncome = income - deductionSingle;

    let incomeRanges = [0, 11600, 47150, 100525, 191950, 243725, 609350, Infinity];
    let taxRates = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

    let totalTax = 0;

    if (taxableIncome > 0) {
        for (let i = 0; i < incomeRanges.length; i++) {
            let lowerLimit = incomeRanges[i];
            let upperLimit = incomeRanges[i + 1];
            let rate = taxRates[i];

            if (taxableIncome > upperLimit) {
                totalTax += (upperLimit - lowerLimit) * rate;
            } else {
                totalTax = Math.round((totalTax + ((taxableIncome - lowerLimit) * rate)) * 100) / 100;
                break;
            }
        }
    }

    return totalTax;
}
function render(){
    resultHTML=document.getElementById("taxSum")
    inputValue=document.getElementById("incomeSum").value
    resultHTML.textContent=calculateTax(inputValue)
}