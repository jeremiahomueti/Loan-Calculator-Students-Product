function computeLoan(){
    let monthly_income = document.getElementById('monthly_income');
    let other_repayments = document.getElementById('other_repayments');
    let interest_rate = document.getElementById('interest_rate');
    let loan_tenor = document.getElementById('loan_tenor');
    let principal = loan_amount/loan_tenor
    
    let interest_amount = loan_amount*interest_rate;
    let repayment_amount = principal+interest_amount;
    let emi_without_repayment = 0.45*monthly_income;
    let emi_with_repayment = emi_without_repayment-other_repayments;
    let loan_amount = document.getElementById('loan_amount');


    document.getElementById('principal').innerHTML = "Principal: ₦"+principal;
}

