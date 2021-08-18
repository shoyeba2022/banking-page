document.getElementById('deposit-button').addEventListener('click', function () {


    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = parseFloat(depositInput.value);
    console.log(depositInputValue);


    const prevDepositTotalText = document.getElementById('deposit-total');
    const prevDepositTotal = parseFloat(prevDepositTotalText.innerText);
    console.log(prevDepositTotal);


    const newdepositTotal = prevDepositTotal + depositInputValue
        ;
    console.log(newdepositTotal);

    prevDepositTotalText.innerText = newdepositTotal;
    depositInput.value = '';


    // balance update

    const prevBalanceText = document.getElementById('balance-total');
    const prevBalance = parseFloat(prevBalanceText.innerText);  // i have 1200
    const newBalance = depositInputValue + prevBalance;   // i m getting 1800
    prevBalanceText.innerText = newBalance;
    console.log(newBalance);

})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {


    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = parseFloat(withdrawInput.value);
    console.log(withdrawInputValue);


    const prevWithdrawTotalText = document.getElementById('withdraw-total');
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalText.innerText);
    console.log(prevWithdrawTotal);


    const newWithdrawTotal = prevWithdrawTotal + withdrawInputValue
        ;
    console.log(newWithdrawTotal);

    prevWithdrawTotalText.innerText = newWithdrawTotal;

    withdrawInput.value = '';


    // balance update

    const prevBalanceText = document.getElementById('balance-total');
    const prevBalance = parseFloat(prevBalanceText.innerText);  // i have 1200
    const newBalance = prevBalance - withdrawInputValue;   // i m getting 1800
    prevBalanceText.innerText = newBalance;
    console.log(newBalance);
})




