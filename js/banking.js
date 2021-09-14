function getInputValue(inputId){
    const  inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue =parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';
    return amountValue;
};


function updateTotalFieid(totalFieldId, amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
};


function getCurrentBalance(){
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}


function updetBalance(amount, isAdd){
    const balanceTotal = document.getElementById('total-balance');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    const previousBalanceTotal = getCurrentBalance();
   
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
    
};


document.getElementById('deposit-btn').addEventListener('click', function(){
   /*  const  depositInput = document.getElementById('your-deposit-amount');
    const depositAmountText = depositInput.value;
    const depositAmountTotal = parseFloat(depositAmountText); */

    // const depositAmountTotal = getInputValue('your-deposit-amount');


    
    /* // get current deposite
    const depositTotal = document.getElementById('total-amount');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);
    depositTotal.innerText = depositAmountTotal + previousDepositTotal; */

    // updateTotalFieid('total-amount',depositAmountTotal);
    
   /*  // updet balance
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal + depositAmountTotal; */
    
    // updetBalance(depositAmountTotal, true);

    const depositAmountTotal = getInputValue('your-deposit-amount');
    if(depositAmountTotal > 0 ){
        updateTotalFieid('total-amount',depositAmountTotal);
        updetBalance(depositAmountTotal, true);
    };
    
    
    // clear input field
    // depositInput.value = '';
});


// withdraw handeler
document.getElementById('withdraw-btn').addEventListener('click', function(){
   /*  const withdrawAmount = document.getElementById('your-withdraw-amount');
    const withdrawAmountText = withdrawAmount.value;
    const withdrawAmountTotal = parseFloat(withdrawAmountText); */

    // const withdrawAmountTotal = getInputValue('your-withdraw-amount');

    // get current withdraw 
   /*  const previousWithdrawAmount = document.getElementById('total-withdraw');
    const previousWithdrawAmountText = previousWithdrawAmount.innerText;
    const previousWithdrawAmountTotal = parseFloat(previousWithdrawAmountText);
    previousWithdrawAmount.innerText = previousWithdrawAmountTotal + withdrawAmountTotal; */

    // updateTotalFieid('total-withdraw',withdrawAmountTotal);


    // updet balance
   /*  const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmountTotal; */

    // updetBalance(withdrawAmountTotal, false);



    const withdrawAmountTotal = getInputValue('your-withdraw-amount');
    const currentBalance = getCurrentBalance()
    if(withdrawAmountTotal > 0 && withdrawAmountTotal < currentBalance ){
        updateTotalFieid('total-withdraw',withdrawAmountTotal);
        updetBalance(withdrawAmountTotal, false);
    };
    if(withdrawAmountTotal > currentBalance){
        console.log('your balance is empty');
    };
    

    // clear Withdraw field
    // withdrawAmount.value = '';

});