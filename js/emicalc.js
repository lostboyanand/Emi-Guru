document.getElementById("emiForm").addEventListener("submit", function(event){
    event.preventDefault();

    //Getting the input values
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value)/100/12;
    const loanTenureMonths = parseFloat(document.getElementById("loanTenure").value);

    //calculating emi
    const emi = calculateEmi(loanAmount,interestRate,loanTenureMonths);

    //calculating total interest
    const totalInterest =(emi * loanTenureMonths) - loanAmount;

    //redirecting after capturing the value
    window.location.href='results.html? loanAmount = ${loanAmount}&interestRate=${interestRate * 12 * 100}&loanTenure=${loanTenureMonths}';
});


    function calculateEmi(loanAmount,interestRate,loanTenureMonths){
        const emi = loanAmount * interestRate * Math.pow(1+interestRate,loanTenureMonths)/ (Math.pow(1+interestRate,loanTenureMonths)-1);
        return emi;
    }