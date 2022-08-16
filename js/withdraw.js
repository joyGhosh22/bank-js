document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    const totalWithdrawElement = document.getElementById('withdraw-total');
    const totalWithdrawString = totalWithdrawElement.innerText;
    const previousTotalWithdraw = parseFloat(totalWithdrawString);


    withdrawField.value = "";

    if (isNaN(newWithdrawAmount)) {
        alert('please input dollar amount only');
        return;
    }

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('you do not have enough money');
        return;
    }

    const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount
    totalWithdrawElement.innerText = currentTotalWithdraw;


    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;










})